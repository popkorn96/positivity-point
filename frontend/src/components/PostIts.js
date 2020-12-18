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
                <h1 class="text-center">Post Its</h1>
                <button type="button" class="btn btn-outline-primary btn-lg btn-block" >Create New Post It</button><hr></hr>
                {/* {this.props.postIts.map((postIt, i) =>  */}
                <PostItItem postIts={this.props.postIts} />)
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