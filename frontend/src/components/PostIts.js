import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPostIts } from '../redux/actions/postItActions';
import PostItItem from '../items/PostItItem';

class PostIts extends Component{
    componentDidMount() {
        this.props.getPostIts();
    };
    render(){
        return (
            <div>
                <h1>Post-Its</h1>
                <ul>{this.props.postIts.map((postIt, i) => 
                <PostItItem key={i} postIt={postIt} />)}</ul>
            </div>
        )
    }
}
const mapStateToProps = ({postIts}) => {
    return {
        postIts: postIts.all
    }
}
export default connect(mapStateToProps, { getPostIts })(PostIts)