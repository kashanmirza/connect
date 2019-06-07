import React, { Component, PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { Card, Row, Col } from 'react-bootstrap';
import _ from 'lodash';

//Components
import HomeHeader from './HomeHeader'
import TabBar from './ServiceCatalogTabBar'

//Assets
import "../../../assets/css/core.scss";

//constant
import TabData from '../../../constant/tabConstants/tabs';

class ServiceCatalog extends PureComponent {

    constructor(props) {
        super(props);

        this.state= {
            headerTabData : [
                {
                    id: "01",
                    tabname: 'Dashboard'
                },
                {
                    id: "02",
                    tabname: 'Services Catalog'
                }
            ],
            tabData : _.cloneDeep(TabData)
        }

    }

    click = () => {
        alert("Modal")
    };

    render() {
        return (
            <div className="service-catalog">
                <div>
                    <HomeHeader headerTabData={this.state.headerTabData} tabData={this.state.tabData}/>
                </div>
                <div className="top-space">
                    <TabBar tabData={this.state.tabData} click={this.click}/>
                </div>
                
            </div>
        );
    }
}


ServiceCatalog.propTypes ={
    headerTabData : PropTypes.array,
    tabData : PropTypes.array,
};

export default ServiceCatalog;
