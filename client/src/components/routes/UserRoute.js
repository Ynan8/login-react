import React from 'react'
import LoadingToRedirect from './LoadingToRedirect'

//Redux
import { useSelector } from 'react-redux'

const UserRoute = ({children}) => {

    const { user } = useSelector((state) => ({...state}))


  return user && user.token
  ? children
  : <LoadingToRedirect/>
}

export default UserRoute