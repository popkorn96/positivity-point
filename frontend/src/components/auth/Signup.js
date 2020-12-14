import React, { Component } from 'react'

export default class Signup extends Component {
    constructor(props){
        super();
        this.state = {
            name: "",
            dob: "",
            email: "",
            password: "",
            signupErrors: ""
        }
    }
    handleOnSubmit(event){
        event.preventDefault();
        console.log("form submitted")
    }
    handleOnChange(event){
        this.setState({
            name: event.target.value,
        });
    }
    render() {
        return (
            <div>
               <form onSubmit={(event) => this.handleOnSubmit(event)}>
                   <input type="text" name="name" placeholder="Your Name" value={this.state.name} onChange={(event) => this.handleOnChange(event)}/>
                   <input type="text" name="dob" placeholder="Date Of Birth" value={this.state.dob} onChange={(event) => this.handleOnChange(event)}/>
                   <input type="text" name="email" placeholder="E-Mail" value={this.state.email} onChange={(event) => this.handleOnChange(event)}/>
                   <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={(event) => this.handleOnChange(event)}/>

               </form>
            </div>
        )
    }
}
