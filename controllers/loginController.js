const loginModel = require('../models/loginData');

//Function adds user to database then redirects user to the main page.
exports.registerUser = async (req, res) => {
    try {
        if(!req.body) {
            console.log('HELLO WORLD ' + req.body);

            let registerNewUser = await loginModel.addUser(req.body);
            if(registerNewUser) {

                let getUser = await loginModel.getUser(req.body);

                if(getUser) {
                    req.session.userId = getUser.userId;
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