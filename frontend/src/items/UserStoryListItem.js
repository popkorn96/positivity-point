import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

export default class UserStoryListItem extends Component {
    handleOnClick() {
        this.props.deleteStory(this.props.story);
        window.location.reload();
    }
    render() {
        const {story} = this.props
        return (
            <div>
            <ListGroup >
                <ListGroup.Item key={story.user_id}><strong>{story.title}</strong><br></br>{story.content}</ListGroup.Item>
                <ButtonGroup className="mb-2">
                    <Button variant="outline-warning" onClick={() => this.handleEdit()}>Edit</Button>
                    <Button variant="outline-danger" onClick={() => this.handleOnClick()}>Remove</Button>
                </ButtonGroup>
            </ListGroup>
        </div>
        )
    }
}

