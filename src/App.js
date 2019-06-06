import React, { Component } from 'react';
import { Route, Link, Router } from 'react-router-dom';
import { history }  from './helpers/history'

import Routes from './routes';


class App extends Component {
    render() {
        return (
            <Router forceRefresh={false} history={history}>
                <div className="body-wrapper" id="body-container">
                    <Routes/>
                </div>
            </Router>
        );
    }
}


export default App;



