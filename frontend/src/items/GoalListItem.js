import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export default function goalListItem({goals}) {
    return (
        <ListGroup variant="flush">{goals.map((goal, i) => 
        <ListGroup.Item key={goal.id}>{goal.content}</ListGroup.Item>)}
        </ListGroup>
    )
}
