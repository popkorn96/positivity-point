import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: #F48190; }
  a, .navbar-nav, .navbar-light .nav-link {
    font-size: 1.2em;
    color: #00000;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.8em;
    color: #00000;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Positivity Point - Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/stories">Stories</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/post-its">Post-Its</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/saved-stories">Saved Stories</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)