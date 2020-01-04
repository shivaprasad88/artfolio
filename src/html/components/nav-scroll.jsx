import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';


function NavScroll() {
  return (
  <Navbar className="nav-scroll"  variant="dark" fixed="top" >
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
  <Nav>
    
    <Nav.Link href="#usa">USA</Nav.Link>
    <Nav.Link href="#ind">India</Nav.Link>
    <Nav.Link href="#col">Colombia</Nav.Link>
  </Nav>
</Navbar.Collapse>
</Navbar>
  )
};

export default NavScroll;