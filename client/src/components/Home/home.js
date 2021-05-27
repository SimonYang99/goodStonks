import React, { useState, useEffect } from 'react';
import HotStocksList from './HotStocksList/hotStocksList'
import { Link } from "react-router-dom";

const Home = () => {
    return(
      <div>                    
        <Link class="btn btn-primary btn-floating btn-lg btn-block m-t-30" to="/">Home Page</Link>
        <Link class="btn btn-success btn-floating btn-lg btn-block m-t-30" to="/login">Login</Link>
        <Link class="btn btn-danger btn-floating btn-lg btn-block m-t-30" to="/register">Register</Link>
        <HotStocksList></HotStocksList>
      </div>
    )
  }

export default Home;
