import React from "react";
import { Card, Row, Col } from 'react-bootstrap';

import './Tiles.scss';
/* eslint-disable */
import Image1 from "../../../assets/images/image1.png";
import Image2 from "../../../assets/images/image2.png";

import Button from '../button/Button'


const Tiles = (props) => {

    const { click } = props;
    const btnAction = "isService";


    return (
        <div className="tile-container">
                <Row>
                    <Col className="tiles">        
                        {/* <Card.Img variant="top" src={Image1} /> */}
                    </Col>
                    <Col className="tiles">
                        {/* <Card.Img variant="top" src={Image1} /> */}
                    </Col>
                    <Col className="tiles">
                        {/* <Card.Img variant="top" src={Image1} /> */}
                    </Col>
                </Row>
                <Row>
                    <Col className="tiles">
                        {/* <Card.Img variant="top" src={Image2} /> */}
                    </Col>
                    <Col className="tiles">
                        {/* <Card.Img variant="top" src={Image2} /> */}
                    </Col>
                    <Col className="tiles">
                        {/* <Card.Img variant="top" src={Image2} /> */}
                    </Col>
                </Row>
                <Button btnAction={btnAction} click={click}/>

        </div>
    )
};

export default Tiles;