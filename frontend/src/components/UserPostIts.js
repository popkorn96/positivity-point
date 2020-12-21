import React, { Component } from 'react'
import { connect } from 'react-redux';
import {getPostIts} from '../redux/actions/postItActions';
import {removePostIt} from '../redux/actions/postItActions';
import {sessionStatus} from '../redux/actions/sessionStatus'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'


class UserPostIts extends Component {
    componentDidMount() {
        this.props.getPostIts();
        this.props.sessionStatus();
    };
    handleDelete = () => {
        // removePostIt(postIt);
        // window.location.reload()
    };
    render(){
        var props = this.props
        return (
            <div>
                <br/>
                <h1 class="text-center">{this.props.userState.name}'s Post Its</h1>
                <Container>
                <Row>
                {this.props.postIts.filter(function(postIt, i){
                    return postIt.user_id === props.userState.id
                }).sort((a, b) => a.created_at < b.created_at ? 1 : -1)
                .map((postIt, i) => (
                        <Col xs="4">
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    {postIt.content}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                        <small className="text-muted">Created at {postIt.created_at}</small><br/><br/>
                        <button type="button" class="btn btn-outline-danger" onClick={this.handleDelete(postIt)}>Delete</button>
                        </Card.Footer>
                        </Card>
                        </Col>
                    ))}
                    </Row>
                </Container>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        userState: state.userState.user,
        postIts: state.postIts.all,
    };
};
const mapDispatchToProps={
    sessionStatus,
    getPostIts,
    removePostIt
};
export default connect(mapStateToProps, mapDispatchToProps)(UserPostIts)
