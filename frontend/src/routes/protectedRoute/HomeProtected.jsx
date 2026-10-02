import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const HomeProtected = () => {

    const { isAuth } = useSelector(store => store.auth)
  console.log(isAuth)
    if(!isAuth) return <Navigate to='/login' />

  return <Outlet />
}

export default HomeProtected
