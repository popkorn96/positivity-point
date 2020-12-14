// import logo from './logo.svg';
import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Main from './containers/Main'
import SignUp from './components/SignUp';
import Login from './components/LogIn'
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
  }
// componentDidMount() {
//   this.loginStatus()
// }
// loginStatus = () => {
//     axios.get('http://localhost:3001/logged_in', 
//     {withCredentials: true})    
// .then(response => {
//       if (response.data.logged_in) {
//         this.handleLogin(response)
//       } else {
//         this.handleLogout()
//       }
//     })
//     .catch(error => console.log('api errors:', error))
//   }
handleLogin = (data) => {
    this.setState({
      loggedInStatus: "LOGGED_IN",
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
        path ="/main" 
        render={props => (
          <Main {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />
        )}
        />
        <Route path ="/signup" component={SignUp}/>
        <Route path ="/login" component={Login}/>
        <Route exact path="/" component= {Home}/>
        <Route path="/stories" component={Stories}/>
        <Route path="/post-its" component={PostIts}/>
        <Route path="/saved-stories" component={SavedStories}/>
        <Route path="/account" component={Account}/>
      </Switch>
    </Router>
    )};
}

export default App;
