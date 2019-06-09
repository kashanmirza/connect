import React from "react";
import { Card, CardImg, CardText, CardBody, CardHeader, CardFooter, Col } from 'reactstrap';

import Button from '../button/Button';
/* eslint-disable */
import './Card.scss'

import image from  '../../../assets/images/logo.svg'


const CardBoard = (props) => {

    const { btnText, btnAction, image, icon, click, text } = props;

    return (
        <Col md={3} className="serviceCard">
            <Card>
                <CardHeader>
                    <CardImg variant="top" src={image}/>
                </CardHeader>
                <CardBody>

                    <CardText>
                        {text}
                    </CardText>

                </CardBody>
                <CardFooter>
                <div className="button">
                    <Button btnAction={btnAction} click={click}></Button>
                    </div>
                </CardFooter>
            </Card>
        </Col>
    );
};

export default CardBoard;