import React, {Component} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {connect} from 'react-redux'
import {loginUser} from '../redux/actions/loginUser'

class Login extends Component {
    state = {
        email: "",
        password: ""
    }
    handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
      }
    validateForm = () => {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleSubmit = event => {
        event.preventDefault();
        debugger
        this.props.loginUser(this.state)
        ;}

    render() {
    return (
        <div className="Login">
        <Form onSubmit={this.handleSubmit}>
            <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
                autoFocus
                type="email"
                onChange={this.handleOnChange}
            />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                onChange={this.handleOnChange}
            />
            </Form.Group>
            <Button block size="lg" type="submit" >
            Login
            </Button>
        </Form>
        </div>
    );}
}
const mapStateToProps = state => {
    return {
        userState: state.userState.user
    };
};
const mapDispatchToProps={
    loginUser
};
export default connect(null, mapDispatchToProps)(Login)