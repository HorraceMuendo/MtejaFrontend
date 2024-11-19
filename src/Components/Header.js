import React from 'react';
import { Navbar, Nav,NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/Header.css';
import logo from './Images/logo.jpg';

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="header fixed-top">
      <Navbar.Brand as={Link} to="/dashboard" className="d-flex align-items-center">
        <img src={logo} alt="Logo" className="logo-image d-inline-block align-top" />
        <span className="d-none d-lg-block ml-2">NaivasCRM</span>
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
          <Nav.Link as={Link} to="/tasks">Tasks</Nav.Link>
          {/* <NavDropdown title="Employees" id="products-dropdown">
            <NavDropdown.Item as={Link} to="/employee/list">List</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/employee/add">Add</NavDropdown.Item>
          </NavDropdown> */}
          <NavDropdown title="Products" id="products-dropdown">
            <NavDropdown.Item as={Link} to="/products/list">List</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/products/add">Add</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Customer" id="customer-dropdown">
            <NavDropdown.Item as={Link} to="/compliments">Compliments</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/complains">Complaints</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/enquiries">Enquiries</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/contact">Contacts</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Reports" id="report-dropdown">
          <NavDropdown.Item as={Link} to="/analytics">Analytics</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/report">Report</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/report/add">ReportForm</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/sales/dashboard">Dashboard</Nav.Link>
         

          <Nav.Link as={Link} to="/user">Account</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;










