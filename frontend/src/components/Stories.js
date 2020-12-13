import React, { Component } from 'react';
import { connect } from 'react-redux'
import {getStories} from '../redux/actions/storyActions'
import StoryListItem from './StoryListItem'

class Stories extends Component {
    componentDidMount() {
        this.props.getStories();
    };
    render(){
        return (
            <div>
                <h1>Stories</h1>
                <ul>{this.props.stories.map((story, i) => 
                <StoryListItem key={i} story={story}/>)}</ul>
            </div>
        )
    }
}
const mapStateToProps = ({stories}) => {
    return {
        stories: stories.all
    }
}

export default connect(mapStateToProps, {getStories})(Stories)
