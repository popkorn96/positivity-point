import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

export default function UserStoryListItem({story, user}) {
    return (
        <div>
        <ListGroup >
            <ListGroup.Item key={story.user_id}><strong>{story.title}</strong><br></br>{story.content}</ListGroup.Item>
            <Button>Remove</Button>
        </ListGroup>
        </div>
    )
}
