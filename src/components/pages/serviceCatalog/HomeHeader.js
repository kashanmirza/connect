import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import TabBar from '../../customComponent/tabBar/TabBar'
import Tiles from  '../../customComponent/tiles/Tiles';
import GovText from '../../pages/serviceCatalog/GovTextComponent'

class HomeHeader extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            headerTabData : props.headerTabData,
            click : props.click
        }
    }


    click = () => {
        alert("Modal")
    };

    render(){
        return (
                <div className="top-main-container">
                  {/*  <Row>
                        <Col>
                            <GovText/>
                            <TabBar data={this.state.headerTabData}/>
                        </Col>

                    </Row>*/}
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
                        </Row>
                </div>
        );
    }

}

export default HomeHeader;
