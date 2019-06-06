import React, { Component } from 'react';
import { Container } from 'react-bootstrap';


const CustomContainer = (props) => {

        return (
            <Container>
                {props.children}
            </Container>
        );

}


export default CustomContainer;