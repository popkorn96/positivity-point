import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getStories, createStory} from '../redux/actions/storyActions';
import {getComments} from '../redux/actions/commentActions';
import StoryListItem from '../items/StoryListItem';
import StoryInput from '../components/StoryInput';

class Stories extends Component {
    componentDidMount() {
        this.props.getStories();
        this.props.getComments();
    };
    render(){
        return (
            <div>
                <br/>
                <h1 class="text-center">Stories</h1><hr></hr>
                <StoryInput createStory={this.props.createStory}/><br/>
                <i><p>“Success is liking yourself, liking what you do, and liking how you do it.”</p></i><p>- Maya Angelou</p>
                <ul>{this.props.stories.sort((a, b) => a.created_at < b.created_at ? 1 : -1)
                .map((story, i) => 
                <StoryListItem key={i} story={story}/> )}</ul>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        stories: state.stories.all,
        comments: state.comments.all
    }
}
const mapDispatchToProps={
    getStories,
    getComments,
    createStory
};
export default connect(mapStateToProps, mapDispatchToProps)(Stories)
