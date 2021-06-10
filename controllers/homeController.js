const homeModel = require('../models/homeData');

// Rendering the homepage
exports.mainPage = (req, res) => {

    if(!req.session.userid) {
        res.render('/', {
            
        });
    } else {
        res.render('/', {
            userId: req.session.userId

        });
    }
}

exports.newAccount = (req, res) => {

    console.log(req.body);
    res.render('/', {

        title: "Main page for a new user!"
    });
}