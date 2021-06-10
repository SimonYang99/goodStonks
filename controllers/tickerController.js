const loginModel = require('../models/loginData');
let tickerData = require('../models/tickerData')

//Function adds user to database then redirects user to the main page.
exports.tickerGetPosts = async (req, res) => {
    try {
        console.log("ticker ran")
        posts = await tickerData.getPosts(req.params.id)
        console.log(posts)
        if(posts) {
            res.send(posts)
        }
            
    } catch (error) {
        throw error;
    }
}

exports.tickerGetPost= async (req, res) => {
    try {
        data = tickerData.getPost(req.params.postId)
        post = await data[0]
        comments = await data[1]
        
        console.log(post)
        res.send([post,comments])
            
    } catch (error) {
        throw error;
    }
}

exports.tickerCreatePost = async (req, res) => {
    try {
        console.log(req.body)
        let data = {'username' : req.body.username,
                    'ticker':req.body.ticker,
                    'postText':req.body.postText,
                    'postTitle':req.body.postTitle
                }
        await tickerData.createPost(data)
        if(req.body.password != req.body.cPassword) {
            if(await loginModel.addUser(req.body)) {
                //Add a user session variable
                req.session.userid = req.body.userid;
                res.redirect('/');
                process.exit();
            }
        }
            
    } catch (error) {
        throw error;
    }
}

exports.tickerCreateComment = async (req, res) => {
    try {
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
            
    } catch (error) {
        throw error;
    }
}