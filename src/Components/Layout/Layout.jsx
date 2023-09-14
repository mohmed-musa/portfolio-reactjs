import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import About from '../About/About'
import Portofolio from '../Portofolio/Portofolio'
import Contact from '../Contact/Contact'
import Home from '../Home/Home'



const Layout = () => {
  return (
    <>

<Navbar/>
<Outlet/>
<Footer/>
      
    </>
  )
}

export default Layout
