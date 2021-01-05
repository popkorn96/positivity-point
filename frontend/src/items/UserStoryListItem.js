import React from 'react'
import {connect} from 'react-redux'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'


const UserStoryListItem = ({story, removeStory}) => {
    return (
        <div>
            <ListGroup >
                <ListGroup.Item key={story.user_id}><strong>{story.title}</strong><br></br>{story.content}</ListGroup.Item>
                <Button variant="outline-danger">Remove</Button>
            </ListGroup>
        </div>
    )
}
export default connect(null, null)(UserStoryListItem);