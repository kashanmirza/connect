import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            submitted: false
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
        const { dispatch } = this.props;
        if (username == "Admin" && password == "Admin") {
            this.props.history.push('/serviceCatalog');
        }
    };

    render() {
        const { username, password, submitted } = this.state;
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
                        <form autoComplete="off" onSubmit={this.handleSubmit}>
                            <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                <input type="text" placeholder="Username" className="form-control" name="username" value={username} onChange={this.handleChange} required/>
                            </div>
                            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                <input type="password" placeholder="Password" className="form-control" name="password" value={password} onChange={this.handleChange} required/>

                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </Row>
            </div>
        );
    }
}

export default Login;
