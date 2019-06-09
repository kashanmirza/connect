import React from "react";
import { Card, Row, Col, Container } from 'react-bootstrap';

import './Tiles.scss';
/* eslint-disable */
import Image1 from "../../../assets/images/image1.png";
import Image2 from "../../../assets/images/image2.png";

import Button from '../button/Button'
import IconBox from '../iconBox/IconBox';

const Tiles = (props) => {

    const { click } = props;
    const btnAction = "isService";


    return (
        <Container className="tile-container">
                
           <Col md={4} className="row-no-padding">
            <div className="gov-tiles">
               <img src={Image1} fluid/>
            </div>
           </Col>
           <Col md={4} className="row-no-padding">
            <div className="gov-tiles">
               <img src={Image1} fluid/>
            </div>
           </Col>
           <Col md={4} className="row-no-padding">
            <div className="gov-tiles">
               <img src={Image1} fluid/>
            </div>
           </Col>
           <Col md={4} className="row-no-padding">
            <div className="gov-tiles">
               <img src={Image1} fluid/>
            </div>
           </Col>
           <Col md={4} className="row-no-padding">
            <div className="gov-tiles">
               <img src={Image1} fluid/>
            </div>
           </Col>
           <Col md={4} className="row-no-padding">
            <div className="gov-tiles">
               <img src={Image1} fluid/>
            </div>
           </Col>
           

        </Container>
    )
};

export default Tiles;