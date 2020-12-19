import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

export default function goalListItem({goal, user}) {
    return (
        <div>
        <ListGroup >
            <ListGroup.Item key={goal.user_id}><strong>{goal.title}</strong><br></br>{goal.content}</ListGroup.Item>
            <Button variant="outline-danger">Remove</Button>
        </ListGroup>
        </div>
    )
}
