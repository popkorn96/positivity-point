import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {logoutUser} from '../redux/actions/logoutUser'
import SplitButton from 'react-bootstrap/SplitButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'



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
  .button{
    background-color: #00A0FC;
    border-color: #00A0FC;
    color: #515151;
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
            {props.logged_in ? (
                <Dropdown as={ButtonGroup} class="dropdown">
                <Button className="button" href="/account">Account</Button>

                <Dropdown.Toggle className="dropdown" split id="dropdown-split-basic" />

                <Dropdown.Menu className="d-menu">
                  <Dropdown.Item className="items" href="/userStories">My Stories</Dropdown.Item>
                  <Dropdown.Item className="items" href="/userPostits">My Post Its</Dropdown.Item>
                  <Dropdown.Item href="/login" className="logout" onClick={(e)=> handleClick(e)}>Logout</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>) :null }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  </div>)
};
export default connect(null, { logoutUser })(NavigationBar);