import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPostIts } from '../redux/actions/postItActions';
import PostItItem from '../items/PostItItem';
import PostItInput from '../components/PostItInput';
import {createPostIt} from '../redux/actions/postItActions'

class PostIts extends Component{
    componentDidMount() {
        this.props.getPostIts();
    };
    render(){
        return (
            <div>
                <br/>
                <h1 class="text-center">Post Its</h1>
                <PostItInput createPostIt={this.props.createPostIt} user={this.props.userState}/>
                <PostItItem postIts={this.props.postIts} />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        userState: state.userState.user,
        postIts: state.postIts.all, 
    }
}
const mapDispatchToProps={
    getPostIts,
    createPostIt
}
export default connect(mapStateToProps, mapDispatchToProps)(PostIts)