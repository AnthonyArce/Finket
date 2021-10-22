import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Boton from "../../components/Boton";


const Home = () => (
    <div className="container ">
      <Container>
        <Row>
            <Col>
              <Boton>Hola</Boton>
            </Col>
        </Row>
      </Container>
    </div>
  );


export default Home;