import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, InputGroup } from 'reactstrap';

import { login, logout } from '../../../redux/actions/user'
import "../../../assets/css/core.scss"
import Button from '../../customComponent/button/Button'


class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false,
            btnAction: 'isLogin'

        };
    }


    handleChange= (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit= (e) => {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, password } = this.state;
        if(username && password){
            this.props.handleSubmit(username,password);
        }

    };

    render() {
        const { username, password, submitted } = this.state;
        return (
            <div className="form-container">
                <Row>
                    <div className="form-header-div">
                        <h1 className="gov-heading">Government Services</h1>
                        <p>
                            Please login to view full list of available government services of Smart Dubai. You may browse ans to subscribe
                            available services.
                        </p>
                    </div>
                </Row>
                
                <Row>
                    <div className="form-div">
                        <form onSubmit={this.handleSubmit}>
                            <Col className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                <InputGroup>
                                <input type="text" placeholder="Username" className="form-control user" name="username" value={username} onChange={this.handleChange} required/>
                                </InputGroup>
                            </Col>
                            <Col className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                <input type="password" placeholder="Password" className="form-control user" name="password" value={password} onChange={this.handleChange} required/>

                            </Col>
                            <Col className="form-group">
                                <Row className="">
                                    <Col md={7}>
                                        <Row className="vertical">
                                            <Col md={2}><input type="checkbox" /></Col>
                                            <Col md={8}><p className="remem">Remember Me</p> </Col>
                                            </Row>    
                                    </Col>
                                    <Col md={5}>
                                    <Button btnAction={this.state.btnAction}/>
                                    </Col>
                                </Row>
                                
                            </Col>
                            <hr/>
                            <Col className='form-footer'>
                                <p className="txt-center">For help with login and password details. Please contact your IT Support team</p>
                            </Col>
                        </form>
                    </div>
                </Row>
            </div>
        );
    }
}

export default Login;
