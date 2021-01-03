import React from 'react';
import 'bootswatch/dist/minty/bootstrap.min.css'
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Routes from "./containers/Routes"
import UserSessionStatus from "./containers/User"


function App() {
  return (
    <Router>
      <div className="App">
        <UserSessionStatus />
        <Routes />
      </div>
    </Router>
  )
}

export default App
