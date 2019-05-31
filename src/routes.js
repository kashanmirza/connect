import React, { Component, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

//theme components
import WaitingComponent from './components/theme/waiting';
import NotFound from './components/common/NotFound';

//components
const Core = lazy(() => import('./components/pages/Login/core'));

class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                     <Route exact path="/" component={WaitingComponent(Core)} />
                     <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}


export default Routes;