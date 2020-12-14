import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      email: '',
      password: '',
      dob: '',
      errors: ''
     };
  }
handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };
handleSubmit = (event) => {
    event.preventDefault()
  };
render() {
    const {name, email, password, dob} = this.state
return (
      <div>
        <h1>Sign Up</h1>        
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="name"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <input
            placeholder="Date Of Birth"
            type="date"
            name="dob"
            value={dob}
            onChange={this.handleChange}
          />
          <input
            placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <input 
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />          
          
        
          <button type="submit" class="">
            Sign Up
          </button>
      
        </form>
      </div>
    );
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const {name, dob, email, password} = this.state
    let user = {
      name: name,
      dob: dob,
      email: email,
      password: password
    }
    
axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.props.handleLogin(response.data)
        this.redirect()
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))
  };
redirect = () => {
    this.props.history.push('/')
  }
handleErrors = () => {
    return (
      <div>
        <ul>
        {this.state.errors.map(error => {
        return <li key={error}>{error}</li>
          })}
        </ul>
      </div>
    )
  };
}
export default Signup;