import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'


class Account extends Component {
    render() {
        return (
            <div>
                <h1 class="text-center">Account Information</h1><br></br><br></br>
                <Button variant="outline-primary" href="/userPostits">See All <strong>User</strong> Post Its</Button><hr></hr>
                <Button variant="outline-primary" href="/userStories">See All <strong>User</strong> Stories</Button><hr></hr>
                <Button variant="outline-primary" >Edit Information</Button><hr></hr>
            </div>
        )
    }
}
