import { React, useContext } from 'react'
import Login from './Login/Login'
import UserContext from '../context/UserContext'


const PrivateRoute = ({ page }) => {
  const [user] = useContext(UserContext)

  return (
  <>
      {user ? page : <Login />}
  </>
  )
}

export default PrivateRoute
