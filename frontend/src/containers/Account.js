import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import {sessionStatus} from '../redux/actions/sessionStatus'



class Account extends Component {
    componentDidMount() {
        this.props.sessionStatus();
    };
    render() {
        return (
            <div>
                <h1 class="text-center">Account Information</h1><br></br><br></br>
                <h1>{this.props.userState.name}</h1><hr></hr>
                <h2>{this.props.userState.email}</h2>
                <h3>{this.props.userState.dob}</h3><br></br><br></br>
                <Button variant="outline-primary" href="/userPostits">See All <strong>User</strong> Post Its</Button><hr></hr>
                <Button variant="outline-primary" href="/userStories">See All <strong>User</strong> Stories</Button><hr></hr>
                <Button variant="outline-primary" >Edit Information</Button><hr></hr>
                <Button variant="outline-danger" >Logout</Button><hr></hr>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        userState: state.userState.user,
    };
};
const mapDispatchToProps={
    sessionStatus
};
export default connect(mapStateToProps, mapDispatchToProps)(Account)
