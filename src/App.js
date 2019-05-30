import React from 'react';
import './App.css';
import Image from './assets/images/logo.svg';
import Image2 from './assets/images/image2.png';
import { Container, Row, Col } from 'react-bootstrap';

import Dummy from './components/customComponent/tabBar/TabBar'
import "./components/customComponent/contianer/container.scss";

import Tiles from  './components/customComponent/tiles/Tiles';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state= {
            tabData : [
                {
                    id: "SS",
                    tabname: 'Smart Service',
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
                },
                {
                    id: "SA",
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
                    id: "SI",
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


  render(){
      return (
          <div className="App">
              <Container>
                  <Row>
                      <Col>
                        <div className="gov-container">
                            <h1>Government Services</h1>
                            <p>test test test test test test test test test test test
                                test test test test test test test test test test test </p>
                        </div>
                      </Col>
                      <Col>
                          <Tiles/>
                      </Col>
                  </Row>
              </Container>
              <Container>
                  <Row>
                        <Dummy data={this.state.tabData} click={this.click}/>
                  </Row>
              </Container>
          </div>
      );
  }

}

export default App;
