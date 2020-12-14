import React, { Component } from 'react'

export default class Account extends Component {
    render() {
        return (
            <div>
                <h1 class="text-center">Account Information</h1>
                <h3 class="text-center">STATUS: <i>{this.props.loggedInStatus}</i></h3>
                <button type="button" class="btn btn-outline-primary btn-lg btn-block" >See All <strong>User</strong> Post Its</button><hr></hr>
                <button type="button" class="btn btn-outline-primary btn-lg btn-block" >See All <strong>User</strong> Stories</button><hr></hr>
                <button type="button" class="btn btn-outline-primary btn-lg btn-block" >Edit Information</button><hr></hr>
                <button type="button" class="btn btn-outline-primary btn-lg btn-block" >Logout</button><hr></hr>
            </div>
        )
    }
}

