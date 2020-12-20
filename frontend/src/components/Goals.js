import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getGoals} from '../redux/actions/goalActions';
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
                <GoalInput user={this.props.state.userState} createGoal={this.props.state.createGoal}/>
                <h1>{this.props.userState.name}'s Goals</h1><br/>
                {this.props.goals.filter(function(goal, i){
                    return goal.user_id === props.userState.id
                })
                .map((goal, i) =>
                    <GoalListItem key={goal.id} goal={goal} user={props.userState}/>
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
    createGoal
};
export default connect(mapStateToProps, mapDispatchToProps)(Goals)
