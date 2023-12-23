import React from 'react'
//import "./Layout.css";
//import Sidebar from "./Pages/Sidebar";
import Sidebar from '../Pages/Sidebar'

const Layout = ({ children }) => {
  return (
    <div>
    <Sidebar />
    {children}
    </div>
  )
}

export default Layout


