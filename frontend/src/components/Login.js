import React, {Component} from "react";
import {connect} from 'react-redux'
import {loginUser} from '../redux/actions/loginUser'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        email: "",
        password: ""
    }}
    changeEmail=(event)=> {
        this.setState(
            {email: event.target.value}
        );
    }
    changePassword=(event)=>{
        this.setState(
            {password: event.target.value}
        );
    }
    validateForm = () => {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log('UserEmail: ' + this.state.email)
        const userData = { email: this.state.email, password: this.state.password }
        
        this.props.loginUser(userData)
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(userData)
        // };
        // fetch(`http://localhost:3001/login`, requestOptions)
        //         .then((resp) => resp.json())
        //         .catch(error => console.error('Error', error))
        //         .then((data) => console.log('Success', data))
        // this.props.history.push("/")
        this.setState({
            email: "",
            password: ""
          });
        // window.location.reload() 
        ;}

    render() {
    return (
        <div className="Login">
        <form onSubmit={this.handleSubmit}>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.changeEmail} value={this.state.email}/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.changePassword} value={this.state.password}/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );}
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      loginUser: (formDAta) => dispatch(loginUser(formDAta, ownProps)),
    };
  };
export default connect(null, mapDispatchToProps)(Login)