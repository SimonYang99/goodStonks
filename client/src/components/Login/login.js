import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
// import * as ReactBootstrap from "react-bootstrap";
// import { Form, Col, Button, Card } from "react-bootstrap";

const Login = () => {
  const [message, setMessage] = useState("no message :(");
  useEffect(()=> {
    fetch('/api/example')
      .then(res => res.json())
      .then(resp => setMessage(resp.message))
  }, [])

  return(
    <div class="card mx-auto" style={{width: '50%'}}>
            <div class="card-body p-40">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h3>GoodStonks</h3>
                </div>
            </div>
            <div class="row m-t-10">
                <div class="col-lg-7 m-t-30 mt-4">
                    <div class="form-group">
                        {/* <label for="InputEmail">Email address</label> */}
                        <input type="email" class="form-control" id="InputEmail" placeholder="Email"/>
                    </div>
                    <div class="form-group">
                        {/* <label for="InputPassword">Password</label> */}
                        <input type="password" class="form-control" id="InputPassword" placeholder="Password"/>
                    </div>
                    <div class="checkbox m-b-10 pb-2">
                        <div class="custom-control custom-checkbox checkbox-primary form-check">
                        <input type="checkbox" class="form-check-input" id="Check"/>
                        <label class="form-check-label" for="Check">Remember Me</label>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary btn-floating btn-lg btn-block m-t-30">Sign In</button>
                </div>
                <div class="col-lg-5 text-center d-flex flex-column">
                    <div>
                        <p class="text-justify mt-4">
                            <strong>Do not have an account? </strong>
                            Please spend a few seconds to create your account and enjoy everything that GoodStonks has to offer.
                        </p>                        
                    </div>
                    <div class="row mt-auto">
                        <div class="col">
                            {/* <button class="btn btn-warning btn-floating btn-lg btn-block m-t-30">Register</button> */}
                            <Link class="btn btn-warning btn-floating btn-lg btn-block m-t-30" to="/register">Register</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <Link class="mb-4 ml-4" to="/">Back to Home Page</Link>
        </div>
  );
}

export default Login;

