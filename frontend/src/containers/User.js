import React, { Component } from "react";
import { connect } from "react-redux";
import { sessionStatus } from "../redux/actions/sessionStatus";
import { NavigationBar } from "../components/NavigationBar";

class UserSessionStatus extends Component {
  componentDidMount() {
    this.props.sessionStatus();
  }

  render() {
    return (
      <div>
        <NavigationBar isLoggedIn={this.props.isLoggedIn} user={this.props.user} />
      </div>
    );
  }
}

const mapStateToProps = ({ usersReducer }) => {
  const { isLoggedIn, user } = usersReducer;
  return {
    isLoggedIn: isLoggedIn,
    user: user,
  };
};

export default connect(mapStateToProps, { sessionStatus })(UserSessionStatus);