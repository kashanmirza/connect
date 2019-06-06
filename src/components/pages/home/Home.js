import React, { Component } from 'react';
import { Row, Col} from 'react-bootstrap'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//Components
import HeaderImage from '../../customComponent/Image';
import Login from './Login';
import TabBar from '../serviceCatalog/ServiceCatalogTabBar';

//Actions
import { login, logout } from '../../../redux/actions/user';

//Assets
import "../../../assets/css/core.scss";
import Image from '../../../assets/images/logo.svg';
import Image2 from '../../../assets/images/image2.png';

class Home extends Component {

    constructor(props) {
        super(props);

        this.props.logout();

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

    handleSubmit= (username,password) => {
        if (username == "Admin" && password == "Admin") {
           this.props.login(username,password);
        }
    };

    render() {
        return (
            <div className="home-container">
                <div className="home-header">
                    <Row>
                        <Col md={4}>
                            <HeaderImage/>
                        </Col>

                        <Col md={2}>
                        </Col>

                        <Col md={6}>
                            <Login history={this.props.history} handleSubmit={this.handleSubmit}/>
                        </Col>
                    </Row>
                </div>
                <div className="top-space">
                    <TabBar tabData={this.state.tabData} click={this.click}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log("------------ ", state);
    return state;
};

const mapDispatchToProps = dispatch => bindActionCreators({ login, logout }, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(Home);
