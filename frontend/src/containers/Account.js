import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'


export default class Account extends Component {
    render() {
        return (
            <div>
                <h1 class="text-center">Account Information</h1>
                <Button type="Button" class="btn btn-outline-primary btn-lg btn-block" href="/userPostits">See All <strong>User</strong> Post Its</Button><hr></hr>
                <Button type="Button" class="btn btn-outline-primary btn-lg btn-block" href="/userStories">See All <strong>User</strong> Stories</Button><hr></hr>
                <Button type="Button" class="btn btn-outline-primary btn-lg btn-block" >Edit Information</Button><hr></hr>
            </div>
        )
    }
}
