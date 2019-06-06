import React from "react";
import { Card, Row, Col } from 'react-bootstrap';

import Button from '../button/Button';
/* eslint-disable */
import './Card.scss'

import image from  '../../../assets/images/logo.svg'


const CardBoard = (props) => {

    const { btnText, btnAction, image, icon, click, text } = props;

    return (
        <div className="serviceCard">
            <Card>
                <Card.Header>
                    <Card.Img variant="top" src={image}/>
                </Card.Header>
                <Card.Body>
                    
                    
                    <Card.Text>
                        {text}
                    </Card.Text>
                    
                    
                    
                    
                </Card.Body>
                <Card.Footer>
                <div className="button">
                    <Button btnAction={btnAction} click={click}></Button>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default CardBoard;