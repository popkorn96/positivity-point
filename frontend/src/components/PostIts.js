import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPostIts } from '../redux/actions/postItActions'
import PostItListItem from './PostItListItem'

class PostIts extends Component{
    componentDidMount() {
        this.props.getPostIts();
    };
    render(){
    return (
        <div>
            <h1>Post-Its</h1>
            <div>
                <ul>{this.props.postIts.map((postIt, i) => 
                <PostItListItem key={i} story={postIt}/>)}</ul>
            </div>
        </div>
    )}
}
const mapStateToProps = ({postIts}) => {
    return {
        postIts: postIts.all
    }
}
export default connect(mapStateToProps, {getPostIts})(PostIts)