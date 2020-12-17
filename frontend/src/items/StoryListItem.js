import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'

export default function StoryListItem({story}) {
    return (<ListGroup>
        <Accordion>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                {story.title}
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body><i><p>{story.content}</p></i></Card.Body>
                </Accordion.Collapse>
            </Card>

        </Accordion>
    </ListGroup>
)}