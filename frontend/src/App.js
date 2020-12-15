import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { fetchUser } from './redux/actions/userActions'

import Main from './containers/Main'
import Home from './containers/Home';
import Stories from './components/Stories';
import PostIts from './components/PostIts';
import SavedStories from './components/SavedStories';
import Account from './containers/Account'
import { NavigationBar } from './components/NavigationBar';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      isLoggedIn: false,
      // loggedInStatus: "NOT_LOGGED_IN",
      user: {}
     };
     this.handleLogin = this.handleLogin.bind(this)
     this.handleLogout = this.handleLogout.bind(this)
  }
  componentDidMount() {
    this.props.fetchUser()
  }
  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      // loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }
  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  }
  
  render() {
    return(
    <Router>
      <NavigationBar />
      <Switch>
        <Route 
        path ="/main" render={props => (
          <Main {...props} handleLogin={this.handleLogin} />)}/>
        <Route exact path="/" component={Home}/>
        <Route path="/stories" component={Stories}/>
        <Route path="/post-its" component={PostIts}/>
        <Route path="/saved-stories" component={SavedStories}/>
        <Route 
        path="/account" render={props => (
          <Account {...props} handleLogout={this.handleLogout}/>)}/>
      </Switch>
    </Router>
    )};
}

const mapDispatchToProps = state => {
  return {
    user: state.user,
  }
}
export default connect(mapDispatchToProps,{fetchUser})(App);
