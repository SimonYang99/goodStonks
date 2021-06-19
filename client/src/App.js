import React, { useState, useLayoutEffect, useMemo } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/login';
import Register from './components/Register/register'
import Main from './components/Main/main';
import Header from './components/Header/header';
import Profile from './components/Profile/profile';
import Ticker from './components/Ticker/ticker';
import Comments from './components/Comments/Comments';


import { UserProvider } from './context/userContext';

const App = () => {
  let userData = {user: undefined, loggedIn: false};

  if (!!localStorage.getItem("userInfo")){
    userData = {user: JSON.parse(localStorage.getItem("userInfo")), loggedIn: true}
  }else if (!!sessionStorage.getItem("userInfo")) {
    userData = {user: JSON.parse(sessionStorage.getItem("userInfo")), loggedIn: true}
  }

  const [userInfo, setUserInfo] = useState(userData);

  const userValue = useMemo(() => ({
    userInfo,
    setUserInfo
  }), [userInfo])

  let loginRoute = userInfo.loggedIn
  ? <Route path="/profile" component={Profile} />
  : <>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </>

  return(
    <UserProvider value={userValue}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/ticker/:id" component={Ticker} />
          <Route exact path="/ticker/:id/comments/:post_id" component={Comments} />
          {loginRoute}
          {/* <Route path="/" component={Main} /> */}
        </Switch>  
      </BrowserRouter>
    </UserProvider>
  )
}

export default App;

