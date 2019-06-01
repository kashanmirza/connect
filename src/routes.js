import React, { Component, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';


//theme components
import WaitingComponent from './components/theme/waiting';

//common components
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import NotFound from './components/common/NotFound';


//page components
const Core = lazy(() => import('./components/pages/serviceCatalog/ServiceCatalog'));
const Home = lazy(() => import('./components/pages/home/Home'));
const Dummy = lazy(() => import('./components/customComponent/form/Form'));

class Routes extends Component {
    render() {
        return (
            <div>
                <Header/>
                    <div id="body-wrap" className="body-container">
                        <Switch>
                            <Route exact path="/" component={WaitingComponent(Home)} />
                            <Route exact path="/serviceCatalog" component={WaitingComponent(Core)} />
                            <Route exact path="/dummy" component={WaitingComponent(Dummy)} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                <Footer/>
            </div>
        );
    }
}


export default Routes;