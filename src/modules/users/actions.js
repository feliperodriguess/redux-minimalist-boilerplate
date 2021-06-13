import api from '../../services/api'

export const GET_USERS_PENDING = 'GET_USERS_PENDING'
export const GET_USERS_REJECTED = 'GET_USERS_REJECTED'
export const GET_USERS_FULFILLED = 'GET_USERS_FULFILLED'

export const getUsers = () => {
  return (dispatch) => {
    dispatch(getUsersPending())
    api
      .get('users')
      .then((res) => dispatch(getUsersFulfilled(res.data)))
      .catch((err) => dispatch(getUsersRejected(err.message)))
  }
}

const getUsersFulfilled = (users) => ({
  type: GET_USERS_FULFILLED,
  payload: users,
})

const getUsersPending = () => ({
  type: GET_USERS_PENDING,
})

const getUsersRejected = (error) => ({
  type: GET_USERS_REJECTED,
  payload: {
    error,
  },
})
