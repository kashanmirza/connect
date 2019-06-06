import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class CustomModal extends React.Component {

    state = {};

    handleClose= () => {
        const isShow = false;
        this.props.handleClose(isShow)
    };

    render() {
        const { show } = this.props;

        return (
            <div>
                <Modal
                    show={show}
                    onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <div style={{height:"70px"}}></div>
                    </Modal.Header>
                    <Modal.Body>
                        <div style={{height:"400px"}}></div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div style={{height:"70px"}}></div>
                    </Modal.Footer>
                </Modal>

            </div>
        );
    }
}

export default CustomModal;




