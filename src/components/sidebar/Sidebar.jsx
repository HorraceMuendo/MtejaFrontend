import React from 'react'
import logo from "../../images/logo.jpg"
import { MdOutlineClose, MdOutlineGridView } from "react-icons/md";
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
              
              </Link>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  )
}

export default Sidebar