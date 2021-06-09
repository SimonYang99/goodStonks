const loginModel = require('../models/loginData');
let tickerData = require('../models/tickerData')

//Function adds user to database then redirects user to the main page.
exports.tickerGetPosts = async (req, res) => {
    try {
        if(!req.body) {
            posts = await tickerData.getPosts(req.params.id)
            if(posts) {
                res.send(posts)
            }
            
        }
    } catch (error) {
        throw error;
    }
}

exports.tickerGetPost= async (req, res) => {
    try {
        if(!req.body) {
            data = await tickerData.getPosts(req.body.ticker)
            post = data[0]
            comments = data[1]
            console.log(comments)

            
        }
    } catch (error) {
        throw error;
    }
}

exports.tickerCreatePost = async (req, res) => {
    try {
        if(!req.body) {
            let username = req.body.username
            let ticker = req.body.ticker
            let postText = req.body.postText
            await tickerData.getPosts(req.body.ticker)
            if(req.body.password != req.body.cPassword) {
                if(await loginModel.addUser(req.body)) {
                    //Add a user session variable
                    req.session.userid = req.body.userid;
                    res.redirect('/');
                    process.exit();
                }
            }
            
        }
    } catch (error) {
        throw error;
    }
}

exports.tickerCreateComment = async (req, res) => {
    try {
        if(!req.body) {
            let username = req.body.username
            let ticker = req.body.ticker
            let postText = req.body.postText
            await tickerData.getPosts(req.body.ticker)
            if(req.body.password != req.body.cPassword) {
                if(await loginModel.addUser(req.body)) {
                    //Add a user session variable
                    req.session.userid = req.body.userid;
                    res.redirect('/');
                    process.exit();
                }
            }
            
        }
    } catch (error) {
        throw error;
    }
}




