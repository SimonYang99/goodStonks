import React from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";

const style = {
  Buttons: {
    marginRight: '20px'
  }
}

const Header = () => {
  return (
    <Navbar fixed="top" bg="light" className="row">
      <Navbar.Brand className="col" href="/">GoodStonks</Navbar.Brand>
      <Nav className="ml-auto">
        <Link className="btn btn-primary mr-2" to="/login">Login</Link>
        <Link className="btn btn-warning mr-2" to="/register">Register</Link>
        <Link className="btn btn-success mr-2" to="/profile">Profile</Link>
      </Nav>
    </Navbar>
  );
}
 
export default Header;