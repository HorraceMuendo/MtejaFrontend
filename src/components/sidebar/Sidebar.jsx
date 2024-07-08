import React from 'react'
import "../../styles/sidebar.css"
import logo from "../../images/logo.jpg"
import { MdOutlineClose, MdOutlineGridView,MdOutlineBarChart,MdOutlineLogout,MdOutlineSettings } from "react-icons/md";
import { Link } from 'react-router-dom';
function Sidebar() {
  return (
      <nav className='sidebar'>
          <div className='sidebar-top'>
              <div className='sidebar-brand'>
                <img src={logo} alt="Brand-Logo" />
                <span className='siebar-brand-text'> MtejaCRM</span>
             </div>
              <button className='sidebar-close-btn' >
                 <MdOutlineClose size={24} />
              </button>
      </div>
      <div className='sidebar-body'>
        <div className='sidebar-menu'>
          <ul className='menu-list'>
            <li className='menu-item'>
              <Link to="/" className='menu-link active'>
                <span className='menu-link-icon'>
                  <MdOutlineGridView size={18} />
                </span>
              <span className='menu-link-icon'>Dashboard</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineBarChart size={20} />
                </span>
                <span className="menu-link-text">Statistics</span>
              </Link>
            </li>

           
          </ul>

        </div>
                {/* bottom */}
         <div className="sidebar-menu sidebar-menu2">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineSettings size={20} />
                </span>
                <span className="menu-link-text">Settings</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineLogout size={20} />
                </span>
                <span className="menu-link-text">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar