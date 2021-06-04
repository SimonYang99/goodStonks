const homeModel = require('../models/homeData');

// Rendering the homepage
exports.mainPage = (req, res) => {

    if(!req.session.userid) {
        res.render('/', {
            
        });
    }
}