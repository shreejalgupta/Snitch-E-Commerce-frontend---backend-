import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../../shared/UI/components/Navbar'
import Footer from '../../shared/UI/components/Footer'

const sellerLayout = () => {
  return (
    <div>
        <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default sellerLayout
