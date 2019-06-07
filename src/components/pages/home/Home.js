import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
//Components
import HeaderImage from '../../customComponent/Image';
import Login from './Login';
import TabBar from '../serviceCatalog/ServiceCatalogTabBar';

//Actions
import { login, logout } from '../../../redux/actions/user';

//Assets
import "../../../assets/css/core.scss";

//constant
import TabData from '../../../constant/tabConstants/tabs';


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
            tabData : _.cloneDeep(TabData)
        }
    }

    click = () => {
        alert("Modal")
    };

    handleSubmit= (username,password) => {
        if (username && password) {
           this.props.login(username,password);
        }
    };

    render() {
        return (
            <div className="home-container">
                <Container className="home-header">
                    <Row>
                        <Col md={6}>
                            <HeaderImage/>
                        </Col>

                        <Col md={6}>
                            <Login history={this.props.history} handleSubmit={this.handleSubmit}/>
                        </Col>
                    </Row>
                </Container>
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
