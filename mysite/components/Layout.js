import React from 'react'
import Footer from './Footer'
import ResponsiveAppBar from './Navbar'

const Layout = ({children}) => {
  return (
    <div>
    <ResponsiveAppBar/>

    {children}
    
    <Footer/>
    </div>
  )
}

export default Layout
