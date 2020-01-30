import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


function Navigation(props) {
  return (
    <Navbar id="navbar" bg={props.bg} variant="dark" >
      <LinkContainer to={"/"}>
        <Navbar.Brand >Shiva Prasad</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav>

          {props.navscroll.map(function (nav, key) {
            return <LinkContainer to={"/" + nav} key={key}><Nav.Link >{nav.charAt(0).toUpperCase() + nav.slice(1)}</Nav.Link></LinkContainer>
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default Navigation; 