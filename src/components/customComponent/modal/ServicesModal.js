import React, { Component } from 'react';
import { Container , Row, Col, Button, Modal } from 'react-bootstrap';
import CustomButton from '../../customComponent/button/Button';
import IconBox from '../iconBox/IconBox';
import TabBar from '../tabBar/ServicesTabBar';
import { CBConstants } from '../../../constant/checkBoxConstants';

class CustomModal extends React.Component {

    state = {
        isSave: "isSave",
        isReset: "isReset",
        CBConstants: CBConstants
    };

    handleClose= () => {
        const isShow = false;
        this.props.handleClose(isShow)
    };

    render() {
        const { show, tabData } = this.props;

        return (
            <Container>
                <Modal
                    show={show}
                    onHide={this.handleClose}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Highlighted Services
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container className="icon-tile-div">
                            <Row >
                            <Col  md={2} className="box-border-shadow row-no-padding">

                            <button id = "x">&minus;</button>
                                <IconBox> CTS </IconBox>
                            </Col>

                            <Col md={2} className="box-border-shadow row-no-padding">
                                <IconBox> HM </IconBox>
                            </Col>
                            <Col md={2} className="box-border-shadow row-no-padding">
                                <IconBox> GRP </IconBox>
                            </Col>
                            <Col md={2} className="box-border-shadow row-no-padding">
                                <IconBox> BI </IconBox>
                            </Col>
                            <Col md={2} className="box-border-shadow row-no-padding">
                                <IconBox> ATS </IconBox>
                            </Col>
                            <Col md={2} className="box-border-shadow row-no-padding">
                                <IconBox> OM </IconBox>
                            </Col>
                            </Row>
                        </Container>
                        <div className="all-services-div">
                            <div className="all-services">
                                <h3>All Services</h3>
                            </div>
                            <div className="service-choice">
                                <h4> You can choose up to 6 services to highlight</h4>
                            </div>
                        </div>
                        <div className="tab-container-div">
                            <TabBar data={tabData}/>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="footer-div">
                        <Row>
                            <Col>
                                <CustomButton btnAction={this.state.isReset}/>
                            </Col>
                            <Col>
                                <CustomButton btnAction={this.state.isSave}/>
                            </Col>
                        </Row>
                        </div>
                    </Modal.Footer>
                </Modal>

            </Container>
        );
    }
}

export default CustomModal;




