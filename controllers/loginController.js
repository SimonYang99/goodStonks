const loginModel = require('../models/loginData');

//Function adds user to database then redirects user to the main page.
exports.registerUser = async (req, res) => {
    try {
        if(!req.body) {
            console.log('HELLO WORLD ' + req.body);
            
        }
    } catch (error) {
        throw error;
    }
}

//Logins user
exports.loginUser = async (req, res) => {
    
    try {
        
        let loggIn = await loginUser(req.body);

        if(loggIn) {
            req.session.userId = loggIn.body.userId;
            res.redirect('/');
            process.exit();
        }
        
    } catch (error) {
        throw error;
    }
}