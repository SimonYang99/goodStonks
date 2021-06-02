import React from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';

const style = {
  Buttons: {
    marginRight: '20px'
  }
}

const Header = () => {
  return (
    <Navbar fixed="top" bg="light" className="row">
      <Navbar.Brand className="col" href="#">GoodStonks</Navbar.Brand>
      <Nav className="ml-auto">
        <Button style={style.Buttons}>Sign Up</Button>
        <Button style={style.Buttons}>Login</Button>
      </Nav>
    </Navbar>
  );
}
 
export default Header;