import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router';
import { Button, Modal } from 'react-bootstrap';

class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.handleHideLarge = this.handleHideLarge.bind(this);

        this.state = {
            largeModal: false,
        }
    }

    componentDidMount() {

    }

    handleHideLarge() {
        this.setState({ largeModal: false });
    }

    largeModalOpen() {
        this.setState({
            largeModal: true
        })
    }

    render() {
        return (
            <div>

                <Button className="btn btn-link btn-lg" bsSize="large"
                        onClick={() => this.largeModalOpen()}>Large Modal</Button>
                <Modal
                    show={this.state.largeModal}
                    onHide={this.handleHideLarge}
                    bsSize="large"
                    container={this}
                    aria-labelledby="contained-modal-title">
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                            Large Modal
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id
                        ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleHideLarge}>Close</Button>
                    </Modal.Footer>
                </Modal>

            </div>
        );
    }
}

export default Modal;




