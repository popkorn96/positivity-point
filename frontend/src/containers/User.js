import React, { Component } from "react"; 
import { connect } from "react-redux";
import { sessionStatus } from "../redux/actions/sessionStatus";
import NavigationBar from "../components/NavigationBar"

class UserSessionStatus extends Component {
  componentDidMount() {
    console.log('a')
    this.props.sessionStatus();
    console.log('b')
  }

  render() {
    return (
      <div>
        <NavigationBar logged_in={this.props.logged_in} user={this.props.user} />
      </div>
    );
  }
}

const mapStateToProps = ({ userState }) => {
  const { logged_in, user } = userState;
  return {
    logged_in,
    user,
  };
};

export default connect(mapStateToProps, { sessionStatus })(UserSessionStatus);