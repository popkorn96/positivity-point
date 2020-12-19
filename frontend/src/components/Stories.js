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
                <StoryInput createStory={this.props.createStory}/>
                <hr></hr>
                <br/>
                <h1 class="text-center">Stories</h1><hr></hr>
                <i><p>Surround yourself with positive and successful people. The influence people have over our own personal energy is amazing. Moods and attitudes are so easily spread – think about how much of a difference a simple smile from a stranger can make for your day, and then magnify it 1000 times!  When you have people around you who inspire you, believe in you and want you to succeed, there’s no room for doubts and even when they creep up, they’re quickly swept away. </p></i>
                <ul>{this.props.stories.map((story, i) => 
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
