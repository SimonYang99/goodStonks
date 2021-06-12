import React, { useContext } from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";

import UserContext from '../../context/userContext';

const style = {
  Buttons: {
    marginRight: '20px'
  }
}

const Header = () => {
  const {userInfo, setUserInfo} = useContext(UserContext);
  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    setUserInfo({user: undefined, loggedIn: false});
    history.push('/');
  }
  
  return (
    <Navbar fixed="top" bg="light" className="row">
      <Navbar.Brand className="col" href="/">GoodStonks</Navbar.Brand>
      {
        userInfo.loggedIn 
        ?(
          <Nav className="ml-auto">
            <Link className="btn btn-success mr-2" to="/profile">Profile</Link>
            <Button className="btn btn-warning mr-2" onClick={()=>handleLogout()}>Logout</Button>
          </Nav>
        )
        :(
          <Nav className="ml-auto">
            <Link className="btn btn-primary mr-2" to="/login">Login</Link>
            <Link className="btn btn-warning mr-2" to="/register">Register</Link>
          </Nav>
        )
      }
      
    </Navbar>
  );
}
 
export default Header;