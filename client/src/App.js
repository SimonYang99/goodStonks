import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  const [message, setMessage] = useState("no message :(");
  useEffect(()=> {
    fetch('/api/example')
      .then(res => res.json())
      .then(resp => setMessage(resp.message))
  }, [])

  return(
    <BrowserRouter>
      <h1>{message}</h1>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/test" component={NotHome} />
      </Switch>  
    </BrowserRouter>
  )
}

const Home = () => {
  return(
    <div>
      Home
    </div>
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

