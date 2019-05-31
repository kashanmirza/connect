import React, { Component } from 'react';

import "../../../assets/css/core.scss"

import Footer from '../../common/Footer'
import App from '../../../App';
import Header from '../../common/Header'



class Dashboard extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
               <Header/>

                    <App/>

                <Footer/>
            </div>
        );
    }
}

export default Dashboard;
