import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getGoals} from '../redux/actions/goalActions';
import GoalListItem from '../items/GoalListItem';

class Goals extends Component {
    componentDidMount() {
        this.props.getGoals();
    };
    render(){
        return (
            <div>
                <h1 class="text-center">Goals</h1>
                <button type="button" class="btn btn-outline-primary btn-lg btn-block" >Create New Goal</button><hr></hr>
                <i><p>Surround yourself with positive and successful people. The influence people have over our own personal energy is amazing. Moods and attitudes are so easily spread – think about how much of a difference a simple smile from a stranger can make for your day, and then magnify it 1000 times!  When you have people around you who inspire you, believe in you and want you to succeed, there’s no room for doubts and even when they creep up, they’re quickly swept away. </p></i>
                <ul>{this.props.goals.map((goal, i) => 
                <GoalListItem key={i} goal={goal}/> )}</ul>
            </div>
        )
    }
}
const mapStateToProps = ({goals}) => {
    return {
        goals: goals.all
    }
}

export default connect(mapStateToProps, {getGoals})(Goals)
