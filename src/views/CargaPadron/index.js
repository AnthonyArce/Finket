import React from "react";
import DropZone from "../../components/Dropzone";
import { Container,Row,Col } from "react-bootstrap";
import "./style.css"

const CargaPadron = () => (
    <>
        <Container>
            <Row>
                <Col className="m-5">
                    <DropZone/>
                </Col>                    
            </Row>
        </Container>
    </>
);


export default CargaPadron;