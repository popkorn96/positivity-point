import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getGoals} from '../redux/actions/goalActions';
import {deleteGoal} from '../redux/actions/goalActions';
import {sessionStatus} from '../redux/actions/sessionStatus'
import GoalListItem from '../items/GoalListItem';
import GoalInput from './GoalInput';
import {createGoal} from '../redux/actions/goalActions'

class Goals extends Component {
    componentDidMount() {
        this.props.getGoals();
        this.props.sessionStatus();
    };
    render(){
        var props = this.props
        return (
            <div>
                <br/>
                <h1>{this.props.userState.name}'s Goals</h1><br/>
                <GoalInput user={this.props.userState} createGoal={this.props.createGoal}/>
                {this.props.goals.filter(function(goal, i){
                    return goal.user_id === props.userState.id
                }).sort((a, b) => a.created_at < b.created_at ? 1 : -1)
                .map((goal, i) =>
                    <GoalListItem key={goal.id} goal={goal} user={props.userState} deleteGoal={this.props.deleteGoal}/>
                )}
                
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        userState: state.userState.user,
        goals: state.goals.all,
    };
};
const mapDispatchToProps={
    sessionStatus,
    getGoals, 
    createGoal, 
    deleteGoal
};
export default connect(mapStateToProps, mapDispatchToProps)(Goals)
