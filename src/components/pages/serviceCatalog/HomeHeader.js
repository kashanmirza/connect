import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import CustomButton from '../../customComponent/button/Button';
import TabBar from '../../customComponent/tabBar/ServicesTabBar';
import Tiles from  '../../customComponent/tiles/Tiles';
import GovText from '../../pages/serviceCatalog/GovTextComponent';
import ServicesModal from '../../customComponent/modal/ServicesModal';

class HomeHeader extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            headerTabData : props.headerTabData,
            click : props.click,
            btnAction : "isService" ,
            show: false,
            tabData : props.tabData
        }
    }


    click = () => {
        alert("Modal")
    };

    handleClose= (isShow) =>  {
        this.setState({ show: isShow });
    };

    handleShow= () => {
        this.setState({ show: true });
    };
    

    render(){
        return (
                <div className="top-main-container">

                        <Row>
                            <Col md={4}>
                                <GovText/>
                            </Col>
                            
                            <Col md={2}>
                            </Col>
                            
                            <Col md={6}>
                            <Tiles click={this.state.click}/>
                            </Col>
                        </Row>
                        
                        <Row>
                          <Col md={4}>  
                                <TabBar data={this.state.headerTabData}/>
                          </Col>
                          <Col md={7}>
                          </Col>
                          <Col md={1}>
                          <CustomButton btnAction={this.state.btnAction} click={() => this.handleShow()}/>
                          </Col>
                        </Row>
                    <ServicesModal show={this.state.show} handleClose={this.handleClose} tabData={this.state.tabData}/>
                </div>
        );
    }

}

export default HomeHeader;
