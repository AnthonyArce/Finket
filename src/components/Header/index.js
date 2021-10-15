import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from '../../assests/image/logo.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

const Header = (props) => (

    <>
    <Navbar bg="light" expand="lg" variant="blue" className="header">
      <Container>
      <img alt="" src={logo} width="100" height="30" className="d-inline-block align-top"/>
        <Navbar.Brand>{props.name}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">home</Nav.Link>
            <Nav.Link href="/cargapadron">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
  </Navbar>
  </>
        
);

export default Header;