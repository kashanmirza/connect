import React from "react";
import { Card, Col } from 'react-bootstrap';

/* eslint-disable */

import Image from  '../../assets/images/smartCities.jpg'
import "../../assets/css/core.scss"


const HeaderImage = (props) => {

    return (
        <Col className="img-box">
            <span className="helper"></span>
            <img src={Image}  fluid/>
        </Col>
    );
};

export default HeaderImage;