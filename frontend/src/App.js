import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
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
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
     };
     this.handleLogin = this.handleLogin.bind(this)
     this.handleLogout = this.handleLogout.bind(this)
  }
  componentDidMount() {
    this.loginStatus()
  }

  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', 
    {withCredentials: true})    
    .then(response => {
      if (response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN") {
        this.setState({
          loggedInStatus: "LOGGED_IN",
          user: response.data.user,
          isLoggedIn: true
        })
      } else if (!response.data.logged_in && this.state.loggedInStatus === "LOGGED_IN"){
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN",
          user: {},
          isLoggedIn: false
        })
      }
    })
    .catch(error => console.log('api errors:', error))
  }
  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }
  handleLogout = () => {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
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
          <Main {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />
        )}/>
        <Route exact path="/" render={props => (
          <Home {...props} loggedInStatus={this.state.loggedInStatus} />
        )}/>
        <Route path="/stories" component={Stories}/>
        <Route path="/post-its" component={PostIts}/>
        <Route path="/saved-stories" component={SavedStories}/>
        <Route 
        path="/account" render={props => (
          <Account {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.loggedInStatus} />
        )}/>
      </Switch>
    </Router>
    )};
}

export default App;