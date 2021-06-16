const loginModel = require('../models/loginData');

//Function adds user to database then redirects user to the main page.
exports.registerUser = async (req, res) => {
    try {
        if(req.body) {
            console.log('HELLO WORLD ' + req.body);

            let registerNewUser = await loginModel.addUser(req.body);
            console.log('Register user: ' + registerNewUser);
            if(registerNewUser) {

                let getUser = await loginModel.getUser(req.body);

                // console.log('get user: ' + JSON.stringify(getUser));
                console.log('get userid: ' + getUser.rows[0].userid);
                if(getUser) {
                    req.session.userid = getUser.rows[0].userid;

                    console.log('get session id : ' + req.session.userid);

                    res.send(getUser.rows)
                }
            }
            
        }
    } catch (error) {
        throw error;
    }
}

//Logins user
exports.loginUser = async (req, res) => {
    try {
        if (req.body) {
            console.log(req.body)

            console.log('request user: ' + req.body.email);

            let logIn = await loginModel.getUser(req.body);

            // console.log('get user: ' + JSON.stringify(logIn));
            if (logIn.rows[0] != undefined) {
                console.log('login user: ' + logIn.rows[0].userid);
                req.session.userid = logIn.rows[0].userid;

                console.log('get session id : ' + req.session.userid);

                console.log('Successfully logged in!');

                res.send(logIn.rows)
            } else {
                console.log("error")
                res.send("error")
            }

        }

    } catch (error) {
        throw error;
    }
}
