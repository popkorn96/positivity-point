import React, { Component } from 'react'
import {connect} from 'react-redux'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

class UserStoryListItem extends Component {
    handleOnClick() {
        this.props.deleteRestaurant(this.props.restaurant.id);
    }
    render() {
        const {story} = this.props
        return (
            <div>
            <ListGroup >
                <ListGroup.Item key={story.user_id}><strong>{story.title}</strong><br></br>{story.content}</ListGroup.Item>
                <Button variant="outline-danger" onClick={() => this.handleOnClick()}>Remove</Button>
            </ListGroup>
        </div>
        )
    }
}

export default connect(null, null)(UserStoryListItem);

