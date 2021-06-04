import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/login';
import Register from './components/Register/register'
import Main from './components/Main/main';
import Header from './components/Header/header';
import Profile from './components/Profile/profile';

const App = () => {
  const [message, setMessage] = useState("no message :(");
  useEffect(()=> {
    fetch('/api/example')
      .then(res => res.json())
      .then(resp => setMessage(resp.message))
  }, [])

  return(
    <BrowserRouter>
      {/* <h1>{message}</h1> */}
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/test" component={NotHome} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
      </Switch>  
    </BrowserRouter>
  )
}

const NotHome = () => {
  return(
    <div>
      notHome
    </div>
  )
}

export default App;

