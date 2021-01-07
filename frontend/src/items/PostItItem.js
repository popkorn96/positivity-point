import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Moment from 'moment';


export default function PostItItem({postIts}) {
    return (
        <div>
            <Container>
                <Row>
                {postIts.sort((a, b) => a.created_at < b.created_at ? 1 : -1).map((postIt, i) => (
                    <Col xs="4">
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                {postIt.content}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                    <small className="text-muted">Posted on {Moment(postIt.created_at).format('MM/DD/YYYY')}</small>
                    </Card.Footer>
                    </Card>
                    </Col>
                ))}
                </Row>
            </Container>
        </div>
)}
