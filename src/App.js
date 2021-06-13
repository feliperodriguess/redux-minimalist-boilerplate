import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ClipLoader } from 'react-spinners'
import './styles.css'

import { getUsers } from './modules/users/actions'
import { getUsersSelector, getUsersLoadingSelector } from './modules/users/selectors'

const App = () => {
  const dispatch = useDispatch()
  const users = useSelector(getUsersSelector)
  const isLoading = useSelector(getUsersLoadingSelector)

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  if (isLoading) {
    return (
      <div className="container">
        <ClipLoader color="white" className="loading" />
      </div>
    )
  }

  return (
    <div className="container">
      <h1 className="title">React + Redux + Thunk Minimalist Boilerplate</h1>
      <div className="content">
        <h2 className="subtitle">Users:</h2>
        <ul className="list">
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
