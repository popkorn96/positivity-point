import React, { Component } from 'react'
import { connect } from 'react-redux';
import {getPostIts} from '../redux/actions/postItActions';
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
    render(){
        var props = this.props
        return (
            <div>
                <h1 class="text-center">{this.props.userState.name}'s Stories</h1>
                <Container>
                <Row>
                {this.props.postIts.filter(function(postIt, i){
                    return postIt.user_id === props.userState.id
                })
                .map((postIt, i) => (
                        <Col xs="4">
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    {postIt.content}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                        <small className="text-muted">Created at {postIt.created_at}</small>
                        </Card.Footer>
                        </Card>
                        </Col>
                    ))}.bind(this))
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
    getPostIts
};
export default connect(mapStateToProps, mapDispatchToProps)(UserPostIts)
