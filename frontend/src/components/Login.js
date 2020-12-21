// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { loginUser } from "../redux/actions/loginUser";
// import {withRouter} from "react-router-dom"

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: "",
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(e) {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     this.props.loginUser(this.state);
//     this.setState({
//       email: "",
//       password: "",
//     });
//   }

//   render() {
//     const { email, password } = this.state;
//     return (
//       <div>
//         <h1>Log In</h1>
//         <form onSubmit={this.handleSubmit}>
//           <div>
//             <div style={{ color: "red" }}>{this.props.emailEr}</div>
//             <input
//               placeholder="email"
//               type="text"
//               name="email"
//               value={email}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div>
//             <div style={{ color: "red" }}>{this.props.passwordEr}</div>
//             <input
//               placeholder="password"
//               type="password"
//               name="password"
//               value={password}
//               onChange={this.handleChange}
//             />
//           </div>
//           <input type="submit" value="Log In" />
//         </form>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     emailEr: usersReducer.emailEr,
//     passwordEr: usersReducer.passwordEr,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loginUser: (formDAta) => dispatch(loginUser(formData)),
//   };
// };

// const customConnectComponent = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Login);

// export default withRouter(customConnectComponent);