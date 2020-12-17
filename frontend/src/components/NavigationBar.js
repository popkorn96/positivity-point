import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {logoutUser} from '../redux/actions/logoutUser'

const Styles = styled.div`
  .navbar { background-color: #00A0FC; }
  a, .navbar-nav, .navbar-light .nav-link {
    font-size: 1.0em;
    color: #00000;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.6em;
    color: #00000;
    &:hover { color: white; }
  }
  .form-right {
  }
  `;

const NavigationBar = (props) => {
  const handleClick = () => {
  const { logoutUser, logged_in, user } = props;
  if (logged_in) {
    logoutUser(user.id);
  }
}; return (
  <div>
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/home">Positivity Point - Welcome {props.user.name}!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Form className="form-right">
              <FormControl type="text" placeholder="Search" className="" />
            </Form>
            {props.logged_in ? null : (<Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>)}
            {props.logged_in ? null : (<Nav.Item><Nav.Link href="/signup">Sign up</Nav.Link></Nav.Item>)}
            {props.logged_in ? (<Nav.Item><Nav.Link href="/stories">Stories</Nav.Link></Nav.Item>) :null }
            {props.logged_in ? (<Nav.Item><Nav.Link href="/post-its">Post-Its</Nav.Link></Nav.Item>) :null }
            {props.logged_in ? (<Nav.Item><Nav.Link href="/saved-stories">Saved Stories</Nav.Link></Nav.Item>) :null }
            {props.logged_in ? (<Nav.Item><Nav.Link href="/profile">Profile</Nav.Link></Nav.Item>) :null }
            {props.logged_in ? (<Nav.Item><Nav.Link href="/login" className="logout" onClick={(e)=> handleClick(e)}>Logout</Nav.Link></Nav.Item>) :null }
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  </div>)
};
export default connect(null, { logoutUser })(NavigationBar);
	