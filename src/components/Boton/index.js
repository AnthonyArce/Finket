import React from "react";
import { Container, Navbar } from "react-bootstrap";
import logo from '../../assests/image/logo.png';
import "./styles.css";

import 'bootstrap/dist/css/bootstrap.min.css';

const Header = (props) => (
    <>
    <Navbar bg="light" expand="lg" variant="blue" >
    <Container className="header">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="100"
          height="30"
          className="d-inline-block align-top"
        />  {props.name}
      
      </Navbar.Brand>
    
    </Container>
    </Navbar>
  </>
);

export default Header;