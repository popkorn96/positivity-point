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
        <NavigationBar logged_in={this.props.logged_in} user={this.props.user} />
      </div>
    );
  }
}

const mapStateToProps = ({ usersReducer }) => {
  const { logged_in, user } = usersReducer;
  return {
    logged_in: logged_in,
    user: user,
  };
};

export default connect(mapStateToProps, { sessionStatus })(UserSessionStatus);