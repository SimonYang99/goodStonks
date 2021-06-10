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
                    res.redirect('/');
                    process.exit();
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
        
        let loggIn = await loginModel.getUser(req.body);

        if(loggIn) {
            req.session.userId = loggIn.userId;
            res.redirect('/');
            process.exit();
        }
        
    } catch (error) {
        throw error;
    }
}