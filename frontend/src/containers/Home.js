import React, { Component } from 'react'
import Goals from '../components/Goals'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button'
import Popover from 'react-bootstrap/Popover'
import UserStories from '../components/UserStories'
import UserPostIts from '../components/UserPostIts'

class Home extends Component {
    render(){  
        const popover1 = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">Motivational Goals</Popover.Title>
              <Popover.Content>
              When you set goals for yourself, it is important that they motivate you: 
              this means making sure that they are important to you, and that there is value in achieving them. 
              Motivation is key to achieving goals.
              </Popover.Content>
            </Popover>
          );  
        const popover2 = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">SMART</Popover.Title>
              <Popover.Content>
                <strong>S</strong>pecific,<br/>
                <strong>M</strong>easurable, <br/>
                <strong>A</strong>ttainable, <br/>
                <strong>R</strong>elevant, <br/>
                <strong>T</strong>ime Bound.<br/>
              </Popover.Content>
            </Popover>
          ); 
        const popover3 = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">Action Plan</Popover.Title>
              <Popover.Content>
              By writing out the individual steps, and then crossing each one off as you complete it, 
              you'll realize that you are making progress towards your ultimate goal. 
              </Popover.Content>
            </Popover>
          ); 
        const popover4 = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">Stick With It</Popover.Title>
              <Popover.Content>
              Remember, goal setting is an ongoing activity, not just a means to an end.
              Your end destination may remain quite similar over the long term, 
              but the action plan you set for yourself along the way can change significantly. 
              Make sure the relevance, value, and necessity remain high.
              </Popover.Content>
            </Popover>
          ); 
        
        return (
        <div>
            <br/>
                <Container>
                    <Row>
                        <Col><h1>Poisitivity Point - Home</h1><hr/>
                        <p><i><strong>Positivity Point Is A Place Where You Can Reach A Positive Mindset & Achieve Your Goals</strong></i></p>
                        <p>Surround yourself with positive and successful people. <br/>
                        The influence people have over our own personal energy is amazing. <br/><br/>
                        Moods and attitudes are so easily spread – think about how much of a difference a simple smile from a stranger <br/>
                        can make for your day, and then magnify it 1000 times! <br/> <br/>
                        When you have people around you who inspire you, believe in you and want you to succeed, <br/>
                        there’s no room for doubts and even when they creep up, <br/>
                        they’re quickly swept away. </p><hr/></Col>
                        
                    </Row>
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                        <Tab eventKey="goals" title="Goals"><br/>
                            <OverlayTrigger trigger="click" placement="right" overlay={popover1}>
                            <Button variant="outline-success">Set Goals That Motivate You</Button>
                            </OverlayTrigger>
                            
                            <OverlayTrigger trigger="click" placement="right" overlay={popover2}>
                            <Button variant="outline-success">Set SMART Goals</Button>
                            </OverlayTrigger>
                            <OverlayTrigger trigger="click" placement="right" overlay={popover3}>
                            <Button variant="outline-success">Make An Action Plan</Button>
                            </OverlayTrigger>
                            <OverlayTrigger trigger="click" placement="right" overlay={popover4}>
                            <Button variant="outline-success">Stick With It!</Button>
                            </OverlayTrigger><br/><br/>
                            <Goals />
                        </Tab>
                        <Tab eventKey="stories" title="Stories">
                            <UserStories />
                        </Tab>
                        <Tab eventKey="postIts" title="PostIts">
                            <UserPostIts />
                        </Tab>
                    </Tabs>
                </Container>
                    
                
            
        </div>
    )}
}
export default Home;
