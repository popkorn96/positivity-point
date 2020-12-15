import React, { Component } from 'react'
import axios from 'axios';

export default class Account extends Component {
    constructor(props){
        super(props)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
    }
    handleLogoutClick(){
        axios.delete(`http://localhost:3001/logout`, {withCredentials: true})
        .then(response => {
            this.props.handleLogout();
        }).catch(error => console.log("logout error", error))
    };
    render() {
        return (
            <div>
                <h1 class="text-center">Account Information</h1>
                <h3 class="text-center">STATUS: <i>{this.props.loggedInStatus}</i></h3>
                <button type="button" class="btn btn-outline-primary btn-lg btn-block" >See All <strong>User</strong> Post Its</button><hr></hr>
                <button type="button" class="btn btn-outline-primary btn-lg btn-block" >See All <strong>User</strong> Stories</button><hr></hr>
                <button type="button" class="btn btn-outline-primary btn-lg btn-block" >Edit Information</button><hr></hr>
                <button 
                type="button" 
                class="btn btn-outline-primary btn-lg btn-block"
                onClick={() => this.handleLogoutClick()}
                >Logout</button><hr></hr>
            </div>
        )
    }
}

