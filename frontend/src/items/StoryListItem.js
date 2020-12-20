import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import CommentListItem from '../items/CommentListItem';
import {getComments} from '../redux/actions/commentActions';
import CommentInput from '../components/CommentInput'
import {createComment} from '../redux/actions/commentActions'

// import Comments from '../components/Comments'

import React, { Component } from 'react'

class StoryListItem extends Component {
    // constructor(props){
    //     super(props)
    // }
    componentDidMount() {
        this.props.getComments();
    };
    render() {
        var props = this.props
        return (
        <ListGroup>
            <Accordion>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    {props.story.title}
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Card.Text><i>{props.story.content}</i></Card.Text>
                    <Button variant="outline-success" onClick={this.handleSave}>Save</Button>{' '}<br></br><br></br>
                    <Accordion>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Comments
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                            {this.props.comments.filter(function(comment,i){
                                return comment.story_id === props.story.id
                            })
                            .map((comment, i) =>
                            <CommentListItem key={comment.id} comment={comment} story={props.story}/>
                            )}<br/>
                            <CommentInput story={this.props.story} createComment={this.props.createComment}/>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
    
            </Accordion>
        </ListGroup>
    )}
}
const mapStateToProps = state => {
    return {
        comments: state.comments.all,
    };
};
const mapDispatchToProps={
    createComment,
    getComments
}
export default connect(mapStateToProps, mapDispatchToProps)(StoryListItem)
