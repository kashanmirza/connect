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
           <IconBox>
               <img src={Image1}/>
           </IconBox>

        </Container>
    )
};

export default Tiles;