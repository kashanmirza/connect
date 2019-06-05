import React, { Component } from 'react';
import { Row, Col} from 'react-bootstrap'
import "../../../assets/css/core.scss"

import HeaderImage from '../../customComponent/Image';
import Login from './Login';


class Home extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="home-container">
                <div className="home-header">
                    <Row>
                        <Col md={6}>
                            <HeaderImage/>
                        </Col>
                        <Col md={6}>
                            <Login submit={this.handleSubmit} history={this.props.history}/>
                        </Col>
                    </Row>
                </div>
                <div className="home-tabBar">
                </div>
            </div>
        );
    }
}

export default Home;
