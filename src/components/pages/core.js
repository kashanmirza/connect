import React, { Component } from 'react';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Footer from '../common/Footer'
import Header from '../common/Header'

import App from '../../App';

let style = {
    width:"100%",
    height:"100%",
    backgroundColor:"#ffffff",
    margin:"5px",
    padding: "20px"
};


class Dashboard extends Component {

    constructor(props) {
        super(props);

    }


    click = () => {
        alert("hello");
    };

    render() {
        return (
            <div>
               <Header/>

                <div style={style}>
                    <App/>
                </div>

                <Footer/>
            </div>
        );
    }
}

export default Dashboard;
