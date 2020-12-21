import React from 'react'
import {connect} from 'react-redux'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { removeStory } from '../redux/actions/storyActions'


const UserStoryListItem = ({story, removeStory}) => {
    const handleDelete = () => {
        removeStory(story);
        window.location.reload()
      };
    return (
        <div>
            <ListGroup >
                <ListGroup.Item key={story.user_id}><strong>{story.title}</strong><br></br>{story.content}</ListGroup.Item>
                <Button onClick={handleDelete}>Remove</Button>
            </ListGroup>
        </div>
    )
}
export default connect(null, { removeStory})(UserStoryListItem);