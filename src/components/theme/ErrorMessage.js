import React, { Component } from 'react';
import { Container } from 'react-bootstrap';


class ErrorMessage extends Component {

    state = {
        hasError: false,
        errorMessage:""
    };

    componentDidCatch(error, info){
        this.setState({
            hasError: true,
            errorMessage: error
        })
    }

    render() {

            if(this.state.hasError){
                return(
                    <Container id="error-container">
                        <h3>Some Went wrong</h3>
                        <p>Please contact your administrator</p>
                    </Container>
                );
            }
            else{
                return this.props.children
            }

    }
}

export default ErrorMessage;
