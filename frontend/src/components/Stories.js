import React, { Component } from 'react';
import { connect } from 'react-redux'
import {getStories} from '../redux/actions/storyActions'

class Stories extends Component {
    componentDidMount() {
        this.props.getStories();
    };
    render(){
        return (
            <div>
                <h1>Stories</h1>
            </div>
        )
    }
}
export default connect(null, {getStories})(Stories)
