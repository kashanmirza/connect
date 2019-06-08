import React from "react";
import { Card, Col } from 'react-bootstrap';

/* eslint-disable */

import image from  '../../assets/images/logo.svg'
import "../../assets/css/core.scss"


const HeaderImage = (props) => {

    return (
        <Col className="img-box">
            <span className="helper"></span>
            <img src={image}  fluid/>
        </Col>
    );
};

export default HeaderImage;