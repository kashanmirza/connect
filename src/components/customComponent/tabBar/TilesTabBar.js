import React, { Component } from 'react';
import { Tabs, Tab, Col} from  'react-bootstrap';
import _ from 'lodash';
import './TabBar.scss';

import Card from "../card/Card";

class TabsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "01",
            tabData: props.data
        }
    }

    componentDidMount() {

        let tabData=  this.state.tabData;
        tabData = this.getCardLength(tabData);
        this.setState({
            tabData: tabData
        });
    }


    getCardLength = (tabData) => {
        tabData.map((obj)=>{
            obj.len = obj.cardData ? ` (${obj.cardData.length})`: "";
        });
        return tabData;
    }

    onSelect = (key) =>{
        this.setState({
            id : key
        });
    };

    click = () => {
        alert("<<<<<<>>>>>>>>>>")
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Tabs id="tab" activeKey={this.state.id} onSelect={this.onSelect}>
                            {this.state.tabData && this.state.tabData.map((items) => {
                                return(<Tab className="tab-content" eventKey={items.id} title={items.tabname + items.len}>
                                        <div className="d-flex flex-wrap">
                                            {items.cardData && items.cardData.map((item) => {
                                                return(
                                                    <Card
                                                        image={item.image}
                                                        text={item.text}
                                                        icon={item.icon}
                                                        btnText={item.btnText}
                                                        btnAction={item.btnAction}
                                                        click={this.click}
                                                    />
                                                )})
                                            }
                                        </div>
                                    </Tab>
                                )})
                            }
                        </Tabs>
                    </div>
                </div>
            </div>
        );
    }
}



export default TabsComponent;