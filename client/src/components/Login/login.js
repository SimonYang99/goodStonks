import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
// import * as ReactBootstrap from "react-bootstrap";
import { Form } from "react-bootstrap";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(email, password);

        let loginPersonObject = {
            email: email,
            password: password
        }

        let url = 'http://localhost:5000/login';

        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginPersonObject),
        };
        fetch(url, requestOptions)
            // .then(response => response.json());
            .then((response) => {
                return response.json()}
            );
    }

  return(
    <div style={{marginTop:'4em'}} className="container-fluid">
        <Form>
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
                        <input  type="email" 
                                class="form-control" 
                                id="InputEmail" placeholder="Email" 
                                value={email}
                                onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div class="form-group">
                        {/* <label for="InputPassword">Password</label> */}
                        <input  type="password" 
                                class="form-control" 
                                id="InputPassword" 
                                placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div class="checkbox m-b-10 pb-2">
                        <div class="custom-control custom-checkbox checkbox-primary form-check">
                        <input type="checkbox" class="form-check-input" id="Check"/>
                        <label class="form-check-label">Remember Me</label>
                        </div>
                    </div>
                    <button type="submit" onClick={handleSubmit} class="btn btn-primary btn-floating btn-lg btn-block m-t-30">Login</button>
                </div>
                <div class="col-lg-5 text-center d-flex flex-column">
                    <div>
                        <p class="mt-4">
                            <strong>Do not have an account? </strong>
                            <br></br>
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
        </Form>
    </div>  
  );
}

export default Login;

