  
import React, { Component } from "react";
import { connect } from "react-redux";
import { signupUser } from "../actions/signupUser";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signupUser(this.state).then(() => {
      if (this.props.status === 409) {
        this.props.history.push("/signup");
      } else {
        this.props.history.push("/")
      }
    });
    this.setState({
      email: "",
      password: "",
    });
  }

  render() {
    const { email, username, password, password_confirmation } = this.state;
    return (
      <div>
        <h1>Sign Up</h1>

        <form onSubmit={this.handleSubmit}>
          <div>
            <div style={{ color: "red" }}>{this.props.emailError}</div>
            <input
              placeholder="email"
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <div style={{ color: "red" }}>{this.props.usernameError}</div>
            <input
              placeholder="username"
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <div style={{ color: "red" }}>{this.props.passwordError}</div>
            <input
              placeholder="password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <input type="submit" value="Create" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ usersReducer}) => {
  const {
    emailError,
    usernameError,
    passwordError,
    status
  } = usersReducer;

  return {
    emailError: emailError,
    usernameError: usernameError,
    passwordError: passwordError,
    status: status
  };
};

export default connect(mapStateToProps, { signupUser })(Signup);