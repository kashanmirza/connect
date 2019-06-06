import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';

export default class SubForm extends React.Component {
    render() {
        return (
            <div>
            <Form>

                <p>
                    Please fill with your company detail which are integrated with happiness meter
                </p>

                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">Text Area</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">Select</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        </FormGroup>
                        <Row>
                            <Label for="exampleSelect">Radio</Label>
                            <Col>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' Checked '}
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' Checked '}
                                    </Label>
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for="exampleFile">File</Label>
                            <Input type="file" name="file" id="exampleFile" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleFile">File</Label>
                            <Input type="file" name="file" id="exampleFile" />
                        </FormGroup>

                    </Col>

                    <Col>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">Select</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleFile">File</Label>
                            <Input type="file" name="file" id="exampleFile" />
                        </FormGroup>
                    </Col>
                </Row>

                <Button>Submit</Button>
            </Form>
            </div>
        );
    }
}
