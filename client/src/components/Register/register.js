import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
// import * as ReactBootstrap from "react-bootstrap";
import { Form } from "react-bootstrap";
import Swal from "sweetalert2"; 

const Register = () => {
    const [username, setUsername] = useState("");
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [passwordInvalid, setPasswordInvalid] = useState({ message: null, invalid: true });
    const [fnameInvalid, setFnameInvalid] = useState({ message: null, invalid: true });
    const [lnameInvalid, setLnameInvalid] = useState({ message: null, invalid: true });
    const [usernameInvalid, setUsernameInvalid] = useState({ message: null, invalid: true });
    const [emailInvalid, setEmailInvalid] = useState({ message: null, invalid: true });

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const validation = () => {
        let r = true;

        (!!fName) ?
            setFnameInvalid({ message: null, invalid: false }) :
            setFnameInvalid({ message: "First Name is required.", invalid: true });
        
        (!!lName) ?
            setLnameInvalid({ message: null, invalid: false }) :       
            setLnameInvalid({ message: "Last Name is required.,", invalid: true });

        (!!username) ?
            setUsernameInvalid({ message: null, invalid: false }) :
            setUsernameInvalid({ message: "Username is required.", invalid: true });

        (!!validateEmail(email)) ?
            setEmailInvalid({ message: null, invalid: false }) :
            setEmailInvalid({ message: "Email is invalid.", invalid: true });

        (!!(password == cPassword) && !!password && !!cPassword) ?
            setPasswordInvalid("") :
            setPasswordInvalid({ message: "Password does not match.", invalid: true });

        (!passwordInvalid.invalid && !fnameInvalid.invalid
            && !lnameInvalid.invalid && !usernameInvalid.invalid
            && !emailInvalid.invalid) ? r = true : r = false;

        return r;
    }

    const history = useHistory();

    let handleSubmit = async (evt) => {
        evt.preventDefault();

        if (!!validation()) {
            var personObject = {
                title: 'Register new User',
                username: username,
                fName: fName,
                lName: lName,
                email: email,
                password: password,
                cPassword: cPassword
            }

            var url = '/register'

            // Simple POST request with a JSON body using fetch
            const requestOptions = {
                method: 'POST',
                // mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    // 'Access-Control-Allow-Origin': url,
                },
                body: JSON.stringify(personObject),
            };
            await fetch(url, requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    //verification stuff
                    Swal.fire({  
                        icon: 'success',
                        title: 'Success',
                        showConfirmButton: false,
                        timer: 1500
                      });  
                    history.push('/login');
                })
        }

    }

    return (
        <div style={{ marginTop: '4em' }} className="container-fluid">
            <Form>
                <div class="card mx-auto" style={{ width: '50%' }}>
                    <div class="card-body p-40">
                        <div class="row">
                            <div class="col-lg-12 text-center">
                                <h3>GoodStonks</h3>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="text" name="fName" class="form-control" id="InputFirstName" placeholder="First Name"
                                        value={fName}
                                        onChange={e => setFName(e.target.value)} />
                                    <span className="text-danger mt-2" >{fnameInvalid.message}</span>

                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="text" name="lName" class="form-control" id="InputLastName" placeholder="Last Name"
                                        value={lName}
                                        onChange={e => { setLName(e.target.value); }} />
                                    <span className="text-danger mt-2" >{lnameInvalid.message}</span>

                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="text" name="username" class="form-control" id="InputUserName" placeholder="Username"
                                        value={username}
                                        onChange={e => setUsername(e.target.value)} />
                                    <span className="text-danger mt-2" >{usernameInvalid.message}</span>

                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="email" name="email" class="form-control" id="InputEmail" placeholder="Email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)} />
                                    <span className="text-danger mt-2" >{emailInvalid.message}</span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="password" name="password" class="form-control" id="InputPassword1" placeholder="Password"
                                        value={password}
                                        onChange={e => { setPassword(e.target.value); }} />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="password" name="cPassword" class="form-control" id="InputPassword2" placeholder="Confirm Password"
                                        value={cPassword}
                                        onChange={e => { setCPassword(e.target.value); }} />
                                    <span className="text-danger mt-2" >{passwordInvalid.message}</span>

                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="checkbox m-t-10">
                                <div class="custom-control custom-checkbox checkbox-primary form-check">
                                    <input type="checkbox" name="checkbox" class="form-check-input" id="Check" />
                                    <label class="form-check-label" for="Check">I accept the Terms of Service</label>
                                </div>
                            </div>
                        </div>
                        <button type="submit" onClick={handleSubmit} class="btn btn-primary btn-floating btn-lg btn-block m-t-30">Create Your Account</button>
                        <Link class="btn btn-warning btn-floating btn-lg btn-block m-t-30" to="/login">Login</Link>
                        {/* <button type="" class="btn btn-warning btn-floating btn-lg btn-block m-t-30">Sign In</button> */}
                    </div>
                    <Link class="mb-4 ml-4" to="/">Back to Home Page</Link>
                </div>
            </Form>
        </div>
    );
}

export default Register;

