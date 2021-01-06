import React, {Component} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'


export default class GoalListItem extends Component {
    handleOnClick() {
        this.props.deleteGoal(this.props.goal.id);
    };
    render() {
        const {goal} = this.props;
        return (
            <div>
            <ListGroup >
                <ListGroup.Item key={goal.user_id}><strong>{goal.title}</strong><br></br>{goal.content}</ListGroup.Item>
                <Button variant="outline-danger" onClick={() => this.handleOnClick()}>Remove</Button>
            </ListGroup>
            </div>
        )
    }
}
