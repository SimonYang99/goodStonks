const loginModel = require('../models/loginData');

exports.registerUser = async (req, res) => {
    try {
        if(!req.body) {
            if(req.body.password != req.body.cPassword)
            await loginModel.addUser(req.body);
        }
    } catch (error) {
        throw error;
    }
}