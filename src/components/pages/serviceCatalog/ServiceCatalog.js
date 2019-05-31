import React, { Component } from 'react';

import "../../../assets/css/core.scss"

import Image from '../../../assets/images/logo.svg';
import Image2 from '../../../assets/images/image2.png';

import HomeHeader from './HomeHeader'
import TabBar from './ServiceCatalogTabBar'


class ServiceCatalog extends Component {

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
                        text:"Some quick example text to build on the card title and make up the bulk of the Some quick example text to build on the card title. ",
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
                <div>
                    <TabBar tabData={this.state.tabData} click={this.click}/>
                </div>
            </div>
        );
    }
}

export default ServiceCatalog;
