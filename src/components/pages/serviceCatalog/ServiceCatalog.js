import React, { Component, PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { Card, Row, Col } from 'react-bootstrap';

//Components
import HomeHeader from './HomeHeader'
import TabBar from './ServiceCatalogTabBar'

//Assets
import "../../../assets/css/core.scss"
import Image from '../../../assets/images/logo.svg';
import Image2 from '../../../assets/images/image2.png';

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
            tabData : [
                {
                    id: "01",
                    tabname: 'Smart Service',
                    cardData:[{
                        id:1,
                        text:"Some quick example text to build on the card title and make up the bulk of the Some quick example text to build on the card title.Some quick example text to build on the card title and make up the bulk of the Some quick example text to build on the card title. ",
                        image:Image,
                        btnAction:"isSubscribe"
                    },{
                        id:2,
                        text:"Some quick example text to build on the card title and make up the bulk of the card's content.This is some extra text for testing.",
                        image:Image,
                        btnAction:"isAlreadySubscribed"
                    },{
                        id:3,
                        text:"Some quick example text to build on the card title and make up the bulk of the card's content.This is some extra text for testing.",
                        image:Image,
                        btnAction:"isNotApplicable"
                    },{
                        id:4,
                        text:"Some quick example text to build on the card title and make up the bulk of the card's content.This is some extra text for testing.",
                        image:Image,
                        btnAction:"isRecommended"
                    },{
                        id:5,
                        text:"Some quick example text to build on the card title and make up the bulk of the card's content.This is some extra text for testing.",
                        image:Image,
                        btnAction:"isRecommended"
                    },{
                        id:6,
                        text:"Some quick example text to build on the card title and make up the bulk of the card's content.This is some extra text for testing.",
                        image:Image,
                        btnAction:"isRecommended"
                    },{
                        id:7,
                        text:"Some quick example text to build on the card title and make up the bulk of the card's content.This is some extra text for testing.",
                        image:Image,
                        btnAction:"isRecommended"
                    },{
                        id:8,
                        text:"Some quick example text to build on the card title and make up the bulk of the card's content.This is some extra text for testing.",
                        image:Image,
                        btnAction:"isRecommended"
                    }]
                },
                {
                    id: "02",
                    tabname: 'Shared Applications',
                    cardData:[{
                        id:1,
                        text:"Some quick example text to build on the card title and make up the bulk of the Some quick example text to build on the card title and make up the bulk of the card's content.This is some extra text for testing.",
                        image:Image2,
                        btnAction:"isSubscribe"
                    },{
                        id:2,
                        text:"Some quick example text to build on the card title and make up the bulk of the card's content.This is some extra text for testing.",
                        image:Image2,
                        btnAction:"isAlreadySubscribed"
                    },{
                        id:3,
                        text:"Some quick example text to build on the card title and make up the bulk of the card's content.This is some extra text for testing.",
                        image:Image2,
                        btnAction:"isNotApplicable"
                    },{
                        id:4,
                        text:"Some quick example text to build on the card title and make up the bulk of the card's content.This is some extra text for testing.",
                        image:Image2,
                        btnAction:"isRecommended"
                    }]
                },
                {
                    id: "03",
                    tabname: 'Shared Infrastructure',
                    cardData:[{
                        id:1,
                        text:"Some quick example text to build on the card title and make up the bulk of the Some quick example text to build on the card title and make up the bulk of the card's content.This is some extra text for testing.",
                        image:Image,
                        btnAction:"isSubscribe"
                    },{
                        id:2,
                        text:"Some quick example text to build on the card title and make up the bulk of the card's content.This is some extra text for testing.",
                        image:Image,
                        btnAction:"isAlreadySubscribed"
                    },{
                        id:3,
                        text:"Some quick example text to build on the card title and make up the bulk of the card's content.This is some extra text for testing.",
                        image:Image,
                        btnAction:"isNotApplicable"
                    },{
                        id:4,
                        text:"Some quick example text to build on the card title and make up the bulk of the card's content.This is some extra text for testing.",
                        image:Image,
                        btnAction:"isRecommended"
                    }]
                }
            ]
        }

    }

    click = () => {
        alert("Modal")
    };

    render() {
        return (
            <div className="service-catalog">
                
                <div>
                    <HomeHeader headerTabData={this.state.headerTabData}/>
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
