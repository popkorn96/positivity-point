import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

export default function CommentListItem({comment}) {
    return (
        <ListGroup>
            <ListGroup.Item variant="info"><i>"{comment.content}"</i></ListGroup.Item>
        </ListGroup>
        )
}
