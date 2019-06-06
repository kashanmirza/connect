import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Button from '../../customComponent/button/Button'
import TabBar from '../../customComponent/tabBar/TabBar'
import Tiles from  '../../customComponent/tiles/Tiles';
import GovText from '../../pages/serviceCatalog/GovTextComponent'

class HomeHeader extends React.Component {
    constructor(props){
        super(props);
        

        this.state = {
            headerTabData : props.headerTabData,
            click : props.click,
            btnAction : "isService" 
            
        }
    }


    click = () => {
        alert("Modal")
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
                          <Button btnAction={this.state.btnAction} click={this.state.click}/>
                          </Col>
                        </Row>
                </div>
        );
    }

}

export default HomeHeader;
