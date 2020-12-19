import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getComments} from '../redux/actions/commentActions';
import {getStories} from '../redux/actions/storyActions'
import CommentListItem from '../items/CommentListItem';

class Comments extends Component {
    componentDidMount() {
        this.props.getComments();
        this.props.getStories();
    };
    render(){
        var props = this.props
        return (
            <div>
                <h1 className="text-center">Comments</h1>
                <h1>{this.props.stories.name}</h1>
                <button type="button" class="btn btn-outline-primary btn-lg btn-block" >Create New Comment</button><hr></hr>
                <ul>{props.comments.filter(({story_id}) => props.stories.some(x => x.id === story_id)).map((comment, i) =>
                    <CommentListItem key={comment.id} comment={comment} />)}
                </ul>
                
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        stories: state.stories.all,
        comments: state.comments.all,
    };
};
const mapDispatchToProps={
    getStories,
    getComments
};
export default connect(mapStateToProps, mapDispatchToProps)(Comments)
