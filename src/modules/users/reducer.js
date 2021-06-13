import { GET_USERS_FULFILLED, GET_USERS_PENDING, GET_USERS_REJECTED } from './actions'

const initialState = {
  loading: false,
  results: [],
  error: null,
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_FULFILLED:
      return {
        ...state,
        loading: false,
        error: null,
        results: [...action.payload],
      }

    case GET_USERS_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      }

    case GET_USERS_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      }

    default:
      return state
  }
}

export default users
