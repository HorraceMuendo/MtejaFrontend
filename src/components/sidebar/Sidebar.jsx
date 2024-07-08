import React from 'react'
import "../../styles/sidebar.css"
import logo from "../../images/logo.jpg"
import { MdOutlineClose, MdOutlineGridView,MdOutlineBarChart,MdOutlineLogout,MdOutlineShoppingBag, MdOutlineSettings,MdOutlineMessage, MdAnnouncement} from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { Link } from 'react-router-dom';
function Sidebar() {
  return (
      <nav className='sidebar'>
          <div className='sidebar-top'>
              <div className='sidebar-brand'>
                <img src={logo} alt="Brand-Logo" />
                <span className='siebar-brand-text'> MTEJA CRM</span>
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
                  <SlCalender  size={20} />
                </span>
                <span className="menu-link-text">Calender</span>
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
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineShoppingBag size={20} />
                </span>
                <span className="menu-link-text">Products</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineMessage size={18} />
                </span>
                <span className="menu-link-text">Messages</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdAnnouncement size={20} />
                </span>
                <span className="menu-link-text">Complains</span>
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