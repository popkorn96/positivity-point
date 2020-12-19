import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {logoutUser} from '../redux/actions/logoutUser'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'



const Styles = styled.div`
  .button{
    background-color: #00A0FC;
    border-color: #00A0FC;
    color: #243c64;
    &:hover { color: white; }
  }
  .dropdown{
    background-color: #00A0FC;
    border-color: #00A0FC;
    &:hover { color: black; }
  }
  
  .d-menu{
    background-color: #00A0FC;
    border-color: #00A0FC;
  }
  .items{
    background-color: #00A0FC;
    border-color: #00A0FC;
    &:hover { color: white; }
  }
  .logout{
    background-color: #00A0FC;
    border-color: #00A0FC;
    &:hover { color: white; }
  }
  `;

const NavigationBar = (props) => {
  const handleClick = () => {
  const { logoutUser, logged_in, user } = props;
  if (logged_in) {
    logoutUser(user.id);
  }
}; return (
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="/home">Positivity Point - Home</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav mr-auto">
    {props.logged_in ? null : (<li class="nav-item active">
        <a class="nav-link" href="/login">Login
          <span class="sr-only">(current)</span>
        </a>
        </li>)}
    {props.logged_in ? null : (<li class="nav-item active">
        <a class="nav-link" href="/signup">Sign Up
          <span class="sr-only">(current)</span>
        </a>
        </li>)}
    {props.logged_in ? (<li class="nav-item active">
        <a class="nav-link" href="/stories">Stories
          <span class="sr-only">(current)</span>
        </a>
      </li>) : null }
    {props.logged_in ? (<li class="nav-item active">
        <a class="nav-link" href="/post-its">Post It Wall
          <span class="sr-only">(current)</span>
        </a>
      </li>) : null }
    {props.logged_in ? (<li class="nav-item active">
        <a class="nav-link" href="/saved-stories">Saved Stories
          <span class="sr-only">(current)</span>
        </a>
      </li>) : null }
    {props.logged_in ? (<li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="/account" role="button" aria-haspopup="true" aria-expanded="false">Account</a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="/userStories">User Stories</a>
          <a class="dropdown-item" href="/userPostits">User Post Its</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="/logout">Logout</a>
        </div>
      </li>) : null }
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search"></input>
      <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>)
  
};

export default connect(null, { logoutUser })(NavigationBar);