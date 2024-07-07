import React from 'react'
import '../styles/header.css'
import Logo from './Logo';
import SearchBar from './SearchBar';
import NavBar from './NavBar';

function Header() {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      {/* <Logo />
      <SearchBar />
      <NavBar /> */}
    </header>
  )
}

export default Header;