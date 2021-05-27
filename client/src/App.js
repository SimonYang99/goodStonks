import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/login';

const App = () => {
  const [message, setMessage] = useState("no message :(");
  useEffect(()=> {
    fetch('/api/example')
      .then(res => res.json())
      .then(resp => setMessage(resp.message))
  }, [])

  return(
      // {{message}}
      <Login />
  )
}

export default App;

