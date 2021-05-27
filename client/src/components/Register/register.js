import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
// import * as ReactBootstrap from "react-bootstrap";
// import { Form, Col, Button, Card } from "react-bootstrap";

const Register = () => {
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
                <div class="row mt-4">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <input type="text" class="form-control" id="InputFirstName" placeholder="First Name"/>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <input type="text" class="form-control" id="InputLastName" placeholder="Last Name"/>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" id="InputEmail" placeholder="Email"/>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <input type="password" class="form-control" id="InputPassword1" placeholder="Password"/>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <input type="password" class="form-control" id="InputPassword2" placeholder="Confirm Password"/>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="checkbox m-t-10">
                        <div class="custom-control custom-checkbox checkbox-primary form-check">
                        <input type="checkbox" class="form-check-input" id="Check"/>
                        <label class="form-check-label" for="Check">I accept the Terms of Service</label>
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary btn-floating btn-lg btn-block m-t-30">Create Your Account</button>
                <Link class="btn btn-warning btn-floating btn-lg btn-block m-t-30" to="/login">Sign In</Link>
                {/* <button type="" class="btn btn-warning btn-floating btn-lg btn-block m-t-30">Sign In</button> */}
            </div>
    </div>
  );
}

export default Register;

