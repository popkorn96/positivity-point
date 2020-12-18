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
                <GoalListItem goals={this.props.goals}/>
            </div>
        )
    }
}

export default connect(({goals}) => ({ goals: goals.all }), {getGoals})(Goals)
