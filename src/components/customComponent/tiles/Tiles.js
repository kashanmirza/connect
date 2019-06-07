import React from "react";
import { Card, Row, Col, Container } from 'react-bootstrap';

import './Tiles.scss';
/* eslint-disable */
import Image1 from "../../../assets/images/image1.png";
import Image2 from "../../../assets/images/image2.png";

import Button from '../button/Button'


const Tiles = (props) => {

    const { click } = props;
    const btnAction = "isService";


    return (
        <Container className="tile-container">
                <Row>
                    <Col className="tiles">        
                        <Card.Img variant="top" src={Image1} />
                    </Col>
                    <Col className="tiles">
                        <Card.Img variant="top" src={Image1} />
                    </Col>
                    <Col className="tiles">
                        <Card.Img variant="top" src={Image1} />
                    </Col>
                </Row>
                <Row>
                    <Col className="tiles">
                        <Card.Img variant="top" src={Image1} />
                    </Col>
                    <Col className="tiles">
                        <Card.Img variant="top" src={Image1} />
                    </Col>
                    <Col className="tiles">
                        <Card.Img variant="top" src={Image1} />
                    </Col>
                </Row>
                

        </Container>
    )
};

export default Tiles;