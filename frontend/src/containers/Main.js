import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Signup from '../components/auth/Signup';

export default class Main extends Component{
    constructor(props){
        super(props)

    }
  render (){
  return (
    <div>
        <h1 class="text-center">Main</h1>
        <h3>STATUS: <i>{this.props.loggedInStatus}</i></h3>
        <Signup/>
            {/* <button type="button" class="btn btn-outline-primary btn-lg btn-block" ><Link to='/login'>Log In</Link></button><hr></hr>
            <button type="button" class="btn btn-outline-primary btn-lg btn-block" ><Link to='/signup'>Sign Up</Link></button><hr></hr> */}
    </div>
  );}
};