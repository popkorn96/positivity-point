import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPostIts } from '../redux/actions/postItActions';
import PostItItem from '../items/PostItItem';
import PostItInput from '../components/PostItInput';

class PostIts extends Component{
    componentDidMount() {
        this.props.getPostIts();
    };
    render(){
        return (
            <div>
                <br/>
                <h1 class="text-center">Post Its</h1>
                <PostItInput />
                {/* {this.props.postIts.map((postIt, i) =>  */}
                <PostItItem postIts={this.props.postIts} />)
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
export default connect(mapStateToProps, { getPostIts })(PostIts)