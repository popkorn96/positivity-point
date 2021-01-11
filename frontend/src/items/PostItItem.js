import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Moment from 'moment';

import React, { Component } from 'react'

export default class PostItItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            upvotes: 0
        }
    }
    handleOnClick(){
        this.setState({
            upvotes: this.state.upvotes + 1
        })
    }
    render() {
        return (
                <Col xs="4">
                <Card>
                    <Card.Body>
                        <Card.Text>
                            {this.props.postIt.content}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                <small className="text-muted">Posted on {Moment(this.props.postIt.created_at).format('MM/DD/YYYY')}</small><br/>{this.state.upvotes}<br/>
                <Button onClick={this.handleOnClick.bind(this)}>Upvote</Button>
                </Card.Footer>
                </Card>
                </Col>
    )
    }
}
