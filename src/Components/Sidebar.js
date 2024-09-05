// import React from 'react'
// import '../styles/Sidebar.css'
// import 
// {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
//   BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
//     from 'react-icons/bs'
//  import logo from './Images/logo.jpg'

// function Sidebar({openSidebarToggle, OpenSidebar}) {
//   return (
//     <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
//         <div className='sidebar-title'>
//         <div className='sidebar-brand'>
//           <img src={logo} alt="Logo" className='logo-img' />
//         </div>
              
              
//             <span className='icon close_icon' onClick={OpenSidebar}>X</span>
//         </div>
  
//         <ul className='sidebar-list'>
//             <li className='sidebar-list-item'>
//                 <a href="/home">
//                     <BsGrid1X2Fill className='icon'/> Dashboard
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                     <BsFillArchiveFill className='icon'/> Products
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                     <BsFillGrid3X3GapFill className='icon'/> Categories
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                     <BsPeopleFill className='icon'/> Customers
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                     <BsListCheck className='icon'/> Inventory
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="/reports">
//                     <BsMenuButtonWideFill className='icon'/> Reports
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="/user">
//                     <BsFillGearFill className='icon'/> UserUpdate
//                 </a>
//             </li>
//         </ul>
//     </aside>
//   )
// }

// export default Sidebar
import React from 'react'
import '../styles/Sidebar.css'
import {
  BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill
} from 'react-icons/bs'
import logo from './Images/logo.jpg'

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <img src={logo} alt="Logo" className='logo-img' />
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="/home">
            <BsGrid1X2Fill className='icon'/> Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="#" className="sidebar-dropdown-toggle">
            <BsFillArchiveFill className='icon'/> Products
          </a>
          <ul className="sidebar-dropdown">
            <li><a href="/products/list">Product List</a></li>
            <li><a href="/products/add">Add Product</a></li>
            <li><a href="/products/categories">Categories</a></li>
          </ul>
        </li>
         <li className='sidebar-list-item'>
          <a href="#" className="sidebar-dropdown-toggle">
            <BsFillArchiveFill className='icon'/> Customers
          </a>
          {/* update the routes */}
          <ul className="sidebar-dropdown">
            <li><a href="/products/list">Complaints</a></li>
            <li><a href="/products/add">Compliments</a></li>
          </ul>
        </li>
        <li className='sidebar-list-item'>
          <a href="/reports">
            <BsMenuButtonWideFill className='icon'/> Reports
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/user">
            <BsFillGearFill className='icon'/> UserUpdate
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar;
