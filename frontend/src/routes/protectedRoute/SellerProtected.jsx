import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'
import NotSeller from '../../shared/UI/components/NotSeller'

const SellerProtected = () => {

  const {role} = useSelector(store => store?.auth?.user)
  
  if(role !== "seller") return <NotSeller />; 

  return <Outlet />
}

export default SellerProtected
