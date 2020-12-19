import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPostIts } from '../redux/actions/postItActions';
import PostItItem from '../items/PostItItem';
import Button from 'react-bootstrap/Button'

class PostIts extends Component{
    componentDidMount() {
        this.props.getPostIts();
    };
    render(){
        return (
            <div>
                <h1 class="text-center">Post Its</h1>
                <Button variant="outline-primary" >Create New Post It</Button><hr></hr>
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