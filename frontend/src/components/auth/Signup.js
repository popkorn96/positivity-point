import React, { Component } from 'react';
import {connect} from 'react-redux'
import {createUser} from '../../redux/actions/createUser'


class Signup extends Component {
    constructor(props){
        super(props);
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
        this.props.createUser({name: this.state.name, dob: this.state.dob, email: this.state.email, password: this.state.password});
        this.setState({
            name: '',
            dob: '',
            email: '',
            password: ''
          });
    }
    handleOnChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        return (
            <div className="Signup">
               <form onSubmit={(event) => this.handleOnSubmit(event)}>
               <div class="form-group">
                    <label for="exampleInputName1">Name</label>

                    <input type="text" name="name" class="form-control" value={this.state.name} onChange={(event) => this.handleOnChange(event)} required/>
               </div>
               <div class="form-group">
                    <label for="exampleInputDOB1">Date of Birth</label>

                    <input type="date" name="dob" class="form-control" value={this.state.dob} onChange={(event) => this.handleOnChange(event)}required/>

               </div>
               <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>

                    <input type="text" name="email" class="form-control" value={this.state.email} onChange={(event) => this.handleOnChange(event)}required/>

               </div>
               <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>

                    <input type="password" name="password" class="form-control" value={this.state.password} onChange={(event) => this.handleOnChange(event)}required/><hr></hr>

               </div>
                   <button class="btn btn-outline-primary btn-lg btn-block" type="submit">Sign Up</button>
               </form>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      createUser: (userData) => dispatch(createUser(userData, ownProps)),
    };
  };
export default connect(null, mapDispatchToProps)(Signup)