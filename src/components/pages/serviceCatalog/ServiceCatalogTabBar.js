import React from 'react';
import Image from '../../../assets/images/logo.svg';
import Image2 from '../../../assets/images/image2.png';
import { Row } from 'react-bootstrap';

import TabBar from '../../customComponent/tabBar/ServicesTabBar'
import Tiles from  '../../customComponent/tiles/Tiles';
import GovText from '../../pages/serviceCatalog/GovTextComponent'

class ServiceCatalogTabBar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            tabData : props.tabData,
            click: props.click
        }
    }


    render(){
        return (
            <div className="tab-container">
                <Row>
                    <TabBar className="border" data={this.state.tabData} click={this.state.click}/>
                </Row>
            </div>
        );
    }

}

export default ServiceCatalogTabBar;
