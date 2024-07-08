import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'


function Layout() {
  return (
      <div className='page-wrapper'>
          {/* left of the page */}
          <Sidebar />
          {/*right content of the page */}
          <div className='content-wrapper'>
          <Outlet/>    
          </div>
          
      </div>
  )
}

export default Layout