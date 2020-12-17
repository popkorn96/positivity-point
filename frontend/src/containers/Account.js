import React, { Component } from 'react'

export default class Account extends Component {
    render() {
        return (
            <div>
                <h1 class="text-center">Account Information</h1>
                <button type="button" class="btn btn-outline-primary btn-lg btn-block" >See All <strong>User</strong> Post Its</button><hr></hr>
                <button type="button" class="btn btn-outline-primary btn-lg btn-block" >See All <strong>User</strong> Stories</button><hr></hr>
                <button type="button" class="btn btn-outline-primary btn-lg btn-block" >Edit Information</button><hr></hr>
            </div>
        )
    }
}
