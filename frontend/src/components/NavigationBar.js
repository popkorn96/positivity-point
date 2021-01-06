import React from 'react';
import {connect} from 'react-redux';
import {logoutUser} from '../redux/actions/logoutUser'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const NavigationBar = (props) => {
  const handleClick = () => {
  const { logoutUser, logged_in, user } = props;
  if (logged_in) {
    logoutUser(user.id);
  }
}; return (
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  {props.logged_in ? <a class="navbar-brand" href="/">Positivity Point</a> : (<li class="nav-item active">
        <a class="navbar-brand" href="/main">Positivity Point
          <span class="sr-only">(current)</span>
        </a>
        </li>)}
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
    </ul>
    {props.logged_in ? (
      <Dropdown as={ButtonGroup}>
        <Button href="/account" className="float-right" variant="success">Account</Button>

        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

        <Dropdown.Menu>
          <Dropdown.Item href="/userStories">User Stories</Dropdown.Item>
          <Dropdown.Item href="/userPostIts">User Post Its</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="/login" onClick={(e) => handleClick(e)}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    ) : null }
  </div>
</nav>)
  
};

export default connect(null, { logoutUser })(NavigationBar);