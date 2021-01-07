import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

export default class UserPostIt extends Component {
    handleOnClick() {
        this.props.deletePostIt(this.props.postIt);
        window.location.reload();
    }
    render() {
        const {postIt} = this.props
        return (
                <Col xs="3">
                <Card>
                    <Card.Body>
                        <Card.Text>
                            {postIt.content}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                <small className="text-muted">Created at {postIt.created_at}</small><br/><br/>
                <Button variant="outline-danger" onClick={() => this.handleOnClick()}>Delete</Button>
                </Card.Footer>
                </Card>
                </Col>
            )}
}
