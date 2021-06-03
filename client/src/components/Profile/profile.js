import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
// import * as ReactBootstrap from "react-bootstrap";
import ProfileImage from "@daym3l/react-profile-image";
import { Form } from "react-bootstrap";

const Profile = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [profilePic, setprofilePic] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(fName, lName, profilePic, password, cPassword);
    }

    const getImages = (base64Image, fileImage) => {
		// Do something with the selected image)
		console.log(base64Image);
		console.log(fileImage);
	};

  return(
    <div style={{marginTop:'4em'}} className="container-fluid">
        <Form>
            <div class="card mx-auto" style={{width: '50%'}}>
         <div class="card-body p-40">
            <div class="row">
                <div class="mx-auto">
                    <ProfileImage
                        returnImage={getImages}
                        uploadBtnProps={{ variant: "contained", label: "Upload"}}
                    />
                </div>
            </div>
                <div class="row mt-4">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <input type="text" class="form-control" id="InputFirstName" placeholder="First Name"
                             value={fName}
                             onChange={e => setFName(e.target.value)}/>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <input type="text" class="form-control" id="InputLastName" placeholder="Last Name"
                             value={lName}
                             onChange={e => setLName(e.target.value)}/>
                        </div>
                    </div>
                </div>               
                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <input type="password" class="form-control" id="InputPassword1" placeholder="New Password"
                             value={password}
                             onChange={e => setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <input type="password" class="form-control" id="InputPassword2" placeholder="Confirm New Password"
                             value={cPassword}
                             onChange={e => setCPassword(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <button type="submit" onClick={handleSubmit} class="btn btn-primary btn-floating btn-lg btn-block m-t-30">Update Profile</button>
            </div>
    </div>
        </Form>
    </div>
  );
}

export default Profile;

