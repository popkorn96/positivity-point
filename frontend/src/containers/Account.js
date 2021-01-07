import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import {sessionStatus} from '../redux/actions/sessionStatus'
import {logoutUser} from '../redux/actions/logoutUser';
import Moment from 'moment';




class Account extends Component {
    state = { toLogout: false }
    componentDidMount() {
        this.props.sessionStatus();
    };
    handleLogout = event => {
        this.setState(() => ({ toLogout: true }))
        this.props.logoutUser();

    }

    render() {
        if (this.state.toLogout) {
            return <Redirect to='/login' />
          }
        return (
            <div>
                <br/>
                <h1 class="text-center">Account Information</h1><br></br><br></br>
                <h1>{this.props.userState.name}</h1><hr></hr>
                <h2>{this.props.userState.email}</h2>
                <h3>{Moment(this.props.userState.dob).format('MM-DD-YYYY')}</h3><br></br><br></br>
                <Button variant="outline-primary" href="/userPostits">See All <strong>User</strong> Post Its</Button><hr></hr>
                <Button variant="outline-primary" href="/userStories">See All <strong>User</strong> Stories</Button><hr></hr>
                <Button variant="outline-primary" >Edit Information</Button><hr></hr>
                <Button variant="outline-danger" onClick={this.handleLogout}>Logout</Button><hr></hr>
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
    sessionStatus,
    logoutUser
};
export default connect(mapStateToProps, mapDispatchToProps)(Account)
