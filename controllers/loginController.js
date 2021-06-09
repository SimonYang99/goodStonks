const loginModel = require('../models/loginData');

//Function adds user to database then redirects user to the main page.
exports.registerUser = async (req, res) => {
    try {
        if(!req.body) {
            console.log(req.body);
            // if(req.body.password != req.body.cPassword) {
            //     if(await loginModel.addUser(req.body)) {
            //         //Add a user session variable
            //         req.session.userid = req.body.userid;
            //         res.redirect('/');
            //         process.exit();
            //     }
            // }
            
        }
    } catch (error) {
        throw error;
    }
}

//Logins user
exports.loginUser = async (req, res) => {
    
}