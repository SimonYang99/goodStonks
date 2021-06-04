import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
// import * as ReactBootstrap from "react-bootstrap";
import { Form } from "react-bootstrap";

const Register = () => {
    const [username, setUsername] = useState("");
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(fName, lName, email, password, cPassword);
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
                                    <input type="text" class="form-control" id="InputUserName" placeholder="Username"
                                        value={username}
                                        onChange={e => setUsername(e.target.value)} />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" id="InputFirstName" placeholder="First Name"
                                        value={fName}
                                        onChange={e => setFName(e.target.value)} />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" id="InputLastName" placeholder="Last Name"
                                        value={lName}
                                        onChange={e => setLName(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" id="InputEmail" placeholder="Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="password" class="form-control" id="InputPassword1" placeholder="Password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)} />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="password" class="form-control" id="InputPassword2" placeholder="Confirm Password"
                                        value={cPassword}
                                        onChange={e => setCPassword(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="checkbox m-t-10">
                                <div class="custom-control custom-checkbox checkbox-primary form-check">
                                    <input type="checkbox" class="form-check-input" id="Check" />
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

