import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
// import * as ReactBootstrap from "react-bootstrap";
import ProfileImage from "@daym3l/react-profile-image";
import { Form } from "react-bootstrap";
import UserContext from '../../context/userContext';

const Profile = () => {
    const [username, setUsername] = useState("");
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [profilePic, setprofilePic] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const { userInfo, setUserInfo } = useContext(UserContext);

    useEffect(() => {
        // console.log(userInfo)w
        setFName(userInfo.user?.firstname);
        setLName(userInfo.user?.lastname);
    }, [])

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(fName, lName, profilePic, password, cPassword);
    }

    const getImages = (base64Image, fileImage) => {
        // Do something with the selected image)
        // console.log(base64Image);
        console.log(fileImage);
        setprofilePic(base64Image)
    };

    return (
        <div style={{ marginTop: '4em' }} className="container-fluid">
            <Form>
                <div className="card mx-auto" style={{ width: '50%' }}>
                    <div className="card-body p-40">
                        <div className="row">
                            <div className="mx-auto">
                                <ProfileImage
                                    returnImage={getImages}
                                    uploadBtnProps={{ variant: "contained", label: "Upload" }}
                                />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="InputFirstName" placeholder="First Name"
                                        value={fName}
                                        onChange={e => setFName(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="InputLastName" placeholder="Last Name"
                                        defaultValue={lName}
                                        onChange={e => setLName(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="password" className="form-control" id="InputPassword1" placeholder="New Password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="password" className="form-control" id="InputPassword2" placeholder="Confirm New Password"
                                        value={cPassword}
                                        onChange={e => setCPassword(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-floating btn-lg btn-block m-t-30">Update Profile</button>
                    </div>
                </div>
            </Form>
        </div>
    );
}

export default Profile;

