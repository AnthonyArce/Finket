import React from "react"
import { Navbar, Container } from "react-bootstrap";

import "./style.css";

const Footer = () => (
    <>
        <Navbar className="footer">
            <Container>
                <Navbar.Text><p className="font">©Banco Columbia 2021, Todos los derechos reservados</p></Navbar.Text>
            </Container>
        </Navbar>
    </>
);

    


export default Footer