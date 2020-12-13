import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPostIts } from '../redux/actions/postItActions'

class PostIts extends Component{
    componentDidMount() {
        this.props.getStories();
    };
    render(){
    return (
        <div>
            <h1>Post-Its</h1>
        </div>
    )}
}

export default connect(PostIts)