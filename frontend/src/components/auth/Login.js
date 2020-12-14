import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            loginErrors: ""
        }
    }
    handleOnSubmit(event){
        event.preventDefault();
        const { email, password} = this.state;

        axios.post(`http://localhost:3001/sessions`, {
            user: {
                name: name,
                dob: dob,
                email: email,
                password: password
            }
        }, { withCredentials:true })
        .then(response => {
            console.log("response from login", response)
            // if (response.data.status === "created"){
            //     this.props.handleSuccessfulAuth(response.data)
            // }})
        .catch(error => {
            console.log("login error", error)
        });
        console.log("form submitted")
    }
    handleOnChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        return (
            <div>
               <form onSubmit={(event) => this.handleOnSubmit(event)}>
                   <input type="text" name="email" placeholder="E-Mail" value={this.state.email} onChange={(event) => this.handleOnChange(event)}required/>
                   <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={(event) => this.handleOnChange(event)}required/><hr></hr>
                   <button class="btn btn-outline-primary btn-lg btn-block" type="submit">Login Up</button>
               </form>
            </div>
        )
    }
}
