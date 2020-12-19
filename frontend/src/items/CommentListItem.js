import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

export default function CommentListItem({comment}) {
    return (
        <ListGroup>
        <Accordion>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                {comment.story_id}
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <Card.Text><i><p>{comment.content}</p></i></Card.Text>
                    
                <Button>Save</Button>
                {/* <Comments /> */}
                </Card.Body>
                </Accordion.Collapse>
            </Card>

        </Accordion>
    </ListGroup>
)}
