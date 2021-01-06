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
                <PostItInput createPostIt={this.props.createPostIt} user={this.props.userState}/><br/>
                <i><p>In an effort to ignite positivity, this page is for Positive Post-Its <br/>
                in which anyone on this app can write things they are grateful for, notes to encourage others, 
                quotes of mindfulness and more!</p></i><hr/>
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