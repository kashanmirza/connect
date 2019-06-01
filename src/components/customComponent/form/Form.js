import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';


class Home extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="form-container">
                <Row>
                    <div className="form-header-div">
                        <h1>Government Services</h1>
                        <p>
                            Please login to view full list of available government services of Smart Dubai. You may browse ans to subscribe
                            available services.
                        </p>
                    </div>
                </Row>
                <Row>
                    <div className="form-div">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Row>
                                <Col xs={6}>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" label="Remember me" />
                                    </Form.Group>
                                </Col>
                                <Col xs={6}>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>

                        </Form>
                    </div>
                </Row>
            </div>
        );
    }
}

export default Home;
