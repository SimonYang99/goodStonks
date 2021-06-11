import React, { useState, useLayoutEffect, useMemo } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/login';
import Register from './components/Register/register'
import Main from './components/Main/main';
import Header from './components/Header/header';
import Profile from './components/Profile/profile';

import { UserProvider } from './context/userContext';

const App = () => {
  // const [message, setMessage] = useState("no message :(");
  // useEffect(()=> {
  //   fetch('/api/example')
  //     .then(res => res.json())
  //     .then(resp => setMessage(resp.message))
  // }, [])

  const [userInfo, setUserInfo] = useState({user: undefined, loggedIn: false})

  const userValue = useMemo(() => ({
    userInfo,
    setUserInfo
  }), [userInfo])

  useLayoutEffect(() => {
    let storedUser = JSON.parse(localStorage.getItem("userInfo"));
    setUserInfo({user: storedUser, loggedIn: true})
  }, [])

  let loginRoute = userInfo.loggedIn
  ? <></>
  : <>
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
  </>

  return(
    <UserProvider value={userValue}>
      <BrowserRouter>
        {/* <h1>{message}</h1> */}
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/test" component={NotHome} />
          <Route path="/profile" component={Profile} />
          {loginRoute}
        </Switch>  
      </BrowserRouter>
    </UserProvider>
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

