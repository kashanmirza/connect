import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


import Routes from './routes';

class App extends Component {
    render() {
        return (
            <Router forceRefresh={false}>
                <div className="body-wrapper">
                    <Routes/>
                </div>
            </Router>
        );
    }
}


export default App;



