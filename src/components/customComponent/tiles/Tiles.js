import React from "react";
import { Card, Row, Col } from 'react-bootstrap';

import './Tiles.scss';
/* eslint-disable */
import Image1 from "../../../assets/images/image1.png"
import Image2 from "../../../assets/images/image2.png"


const Tiles = (props) => {
    return (
        <div className="tile-container">
                <Row>
                    <Col>
                        <Card.Img variant="top" src={Image1} />
                    </Col>
                    <Col>
                        <Card.Img variant="top" src={Image1} />
                    </Col>
                    <Col>
                        <Card.Img variant="top" src={Image1} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card.Img variant="top" src={Image2} />
                    </Col>
                    <Col>
                        <Card.Img variant="top" src={Image2} />
                    </Col>
                    <Col>
                        <Card.Img variant="top" src={Image2} />
                    </Col>
                </Row>
        </div>
    )
};

export default Tiles;