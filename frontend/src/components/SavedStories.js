import React, { Component } from 'react'
import { connect } from 'react-redux';
import {getStories, saveStory} from '../redux/actions/storyActions';
import {getComments} from '../redux/actions/commentActions';
import StoryListItem from '../items/StoryListItem';



class SavedStories extends Component {
    componentDidMount() {
        this.props.getStories();
        this.props.getComments();
    };
    handleClick = () => {
       
    };
    render(){
    return (
        <div>
            <br/>
            <h1 >Saved Stories</h1><hr/>
            <ul>{this.props.stories.filter(function(story, i){
                    return story.saved === true})
                .sort((a, b) => a.created_at < b.created_at ? 1 : -1)
                .map((story, i) => 
                <StoryListItem key={i} story={story} onSave={this.handleSave}/> )}</ul>
            {/* <i><h2>~ Coming Soon! ~</h2></i> */}
        </div>
    )}
}
const mapStateToProps = state => {
    return {
        stories: state.stories.all,
        comments: state.comments.all
    }
}
const mapDispatchToProps={
    getStories,
    saveStory,
    getComments
};
export default connect(mapStateToProps, mapDispatchToProps)(SavedStories)
