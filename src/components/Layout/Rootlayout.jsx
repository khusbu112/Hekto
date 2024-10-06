import React from 'react'
import Homepage from '../Homepage'
import Navbar from '../Navbvar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

const Rootlayout = () => {
  return (
    <>
    <Homepage/>
    <Navbar/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default Rootlayout