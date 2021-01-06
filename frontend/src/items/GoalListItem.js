import React, {Component} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'


export default class GoalListItem extends Component {

    handleOnClick(goal) {
        console.log("what")
        // const id = this.props.goal.id
        this.props.deleteGoal(goal);
        window.location.reload()
    };
    render() {
        const {goal} = this.props;
        return (
            <div>
            <ListGroup >
                <ListGroup.Item key={goal.user_id}><strong>{goal.title}</strong><br></br>{goal.content}</ListGroup.Item>
                <Button variant="outline-danger" onClick={() => this.handleOnClick(goal)}>Remove</Button>
            </ListGroup>
            </div>
        )
    }
}
