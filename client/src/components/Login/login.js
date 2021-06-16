import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
// import * as ReactBootstrap from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom"
import Swal from "sweetalert2"; 

import UserContext from '../../context/userContext';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const {userInfo, setUserInfo} = useContext(UserContext); 
    const history = useHistory();


    const handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log(email, password);

        let loginPersonObject = {
            email: email,
            password: password
        }

        let url = '/login';

        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginPersonObject),
        };
        await fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                if(!!remember) {
                    localStorage.setItem('userInfo', JSON.stringify(data[0]));
                    sessionStorage.setItem('userInfo', JSON.stringify(data[0]));
                }else{
                    sessionStorage.setItem('userInfo', JSON.stringify(data[0]));
                }
                setUserInfo({user: data[0], loggedIn: true})
                Swal.fire({  
                    icon: 'success',
                    title: 'Success',
                    showConfirmButton: false,
                    timer: 1500
                  });  
                history.push('/');
            });
    }

  return(
    <div style={{marginTop:'4em'}} className="container-fluid">
        <Form>
        <div className="card mx-auto" style={{width: '50%'}}>
            <div className="card-body p-40">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h3>GoodStonks</h3>
                </div>
            </div>
            <div className="row m-t-10">
                <div className="col-lg-7 m-t-30 mt-4">
                    <div className="form-group">
                        <input  type="email" 
                                className="form-control" 
                                id="InputEmail" placeholder="Email" 
                                value={email}
                                onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <input  type="password" 
                                className="form-control" 
                                id="InputPassword" 
                                placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div className="checkbox m-b-10 pb-2">
                        <div className="custom-control custom-checkbox checkbox-primary form-check">
                        <input 
                            type="checkbox" 
                            className="form-check-input" 
                            id="Check"
                            value={remember}
                            onChange={()=>setRemember(!remember)}
                            />
                        <label className="form-check-label">Remember Me</label>
                        </div>
                    </div>
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-floating btn-lg btn-block m-t-30">Login</button>
                </div>
                <div className="col-lg-5 text-center d-flex flex-column">
                    <div>
                        <p className="mt-4">
                            <strong>Do not have an account? </strong>
                            <br></br>
                            Please spend a few seconds to create your account and enjoy everything that GoodStonks has to offer.
                        </p>                        
                    </div>
                    <div className="row mt-auto">
                        <div className="col">
                            {/* <button className="btn btn-warning btn-floating btn-lg btn-block m-t-30">Register</button> */}
                            <a className="btn btn-warning btn-floating btn-lg btn-block m-t-30" href="/register">Register</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <a className="mb-4 ml-4" href="/">Back to Home Page</a>
        </div>
        </Form>
    </div>  
  );
}

export default Login;

