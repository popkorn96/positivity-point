import React, { Component } from 'react'
import { connect } from 'react-redux';
import {sessionStatus} from '../redux/actions/sessionStatus'
import {getPostIts} from '../redux/actions/postItActions';
import {deletePostIt} from '../redux/actions/postItActions';

import UserPostIt from './UserPostIt';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'


class UserPostIts extends Component {
    componentDidMount() {
        this.props.sessionStatus();
        this.props.getPostIts()
    };
    render(){
        var props = this.props
        return (
            <div>
                <br/>
                <h1 class="text-center">{this.props.userState.name}'s Post Its</h1><br/>
                <Container>
                    <Row>
                        {this.props.postIts.filter(function(postIt, i){
                            return postIt.user_id === props.userState.id
                        }).sort((a, b) => a.created_at < b.created_at ? 1 : -1)
                        .map((postIt, i) => (
                        <UserPostIt key={postIt.id} postIt={postIt} user={props.userState} deletePostIt={this.props.deletePostIt}/>
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
const mapDispatchToProps= {
    sessionStatus,
    getPostIts, 
    deletePostIt
}
export default connect(mapStateToProps, mapDispatchToProps)(UserPostIts)
