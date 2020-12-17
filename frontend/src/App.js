import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Routes from "./containers/Routes"
import User from "./containers/User"

function App() {
  return (
    <Router>
      <div className="App">
        <User />
        <Routes />
      </div>
    </Router>
  )
}

export default App
