import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getStories} from '../redux/actions/storyActions';
import {sessionStatus} from '../redux/actions/sessionStatus'
import UserStoryListItem from '../items/UserStoryListItem';

class UserStories extends Component {
    componentDidMount() {
        this.props.getStories();
        this.props.sessionStatus();
    };
    render(){
        var props = this.props
        return (
            <div>
                <br/>
                <h1 class="text-center">{this.props.userState.name}'s Stories</h1>
                {this.props.stories.filter(function(story, i){
                    return story.user_id === props.userState.id
                })
                .map((story, i) =>
                    <UserStoryListItem key={story.id} story={story} user={props.userState}/>
                )}
                
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        userState: state.userState.user,
        stories: state.stories.all,
    };
};
const mapDispatchToProps={
    sessionStatus,
    getStories
};
export default connect(mapStateToProps, mapDispatchToProps)(UserStories)
