import React from 'react';
import { Navbar, Nav,NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/Header.css';
import logo from './Images/logo.jpg';

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="header fixed-top">
      <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
        <img src={logo} alt="Logo" className="logo-image d-inline-block align-top" />
        <span className="d-none d-lg-block ml-2">NaivasCRM</span>
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
          <NavDropdown title="Products" id="products-dropdown">
            <NavDropdown.Item as={Link} to="/products/list">List</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/products/add">Add</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/enquiries">Enquiries</Nav.Link>
          <NavDropdown title="Customer" id="customer-dropdown">
            <NavDropdown.Item as={Link} to="/compliments">Compliments</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/complaints">Complaints</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/enquiries">Reports</Nav.Link>
          <Nav.Link as={Link} to="/contactus">Account</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;