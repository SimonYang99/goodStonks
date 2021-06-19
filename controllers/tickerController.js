const loginModel = require('../models/loginData');
let tickerData = require('../models/tickerData')
const fetch = require("node-fetch");
const axios = require("axios");

//Function adds user to database then redirects user to the main page.
exports.tickerGetPosts = async (req, res) => {
    try {
        // console.log("ticker ran")
        posts = await tickerData.getPosts(req.params.id)
        console.log(posts.rows)
        if(posts) {
            res.send(posts.rows)
        }
            
    } catch (error) {
        throw error;
    }
}
// exports.tickerGetAllPosts = async (req, res) => {
//     try {
//         let posts = await tickerData.getAllPosts()
//         let comments = []
//         // console.log(posts.rows)
//         if(posts.rows.length > 0) {
//             for(postIndex in posts.rows){
//                 posts.rows[postIndex].commentsCount = tickerData.getCommentsCount(posts.rows[postIndex].post_id)
//                 comments.push(posts.rows[postIndex].commentsCount)
//             }
//             Promise.all(comments).then((values) => {
//                 console.log(posts.rows[0].commentsCount)
//                 // for(postIndex in posts.rows){
//                 //     posts.rows[postIndex].commentsCount = posts.rows[postIndex].commentsCount.result
//                 // }
//                 res.send(posts.rows)
//             });
//         }
            
//     } catch (error) {
//         throw error;
//     }
// }
exports.tickerGetAllPosts = async (req, res) => {
    try {
        posts = await tickerData.getAllPosts()

        // console.log(posts)
        
        if(posts) {
            res.send(posts.rows)
        }
            
    } catch (error) {
        throw error;
    }
}

exports.tickerGetPost= async (req, res) => {
    try {
        console.log(req.params.id)
        data = tickerData.getPost(req.params.id)
        post = await data[0]
        post = post.rows[0]
        comments = await data[1]
        comments = comments.rows
        res.send({"post":post,"comments":comments})
            
    } catch (error) {
        throw error;
    }
}

exports.tickerCreatePost = async (req, res) => {
    try {

        console.log(req.body)
        if(req.body.username == undefined||
            req.body.postTitle == undefined||
            req.body.ticker == undefined){
            res.send({"error": "please fill out all fields."})
        }else{
            let data = {'username' : req.body.username,
            'ticker':req.body.ticker,
            'postText':req.body.postText,
            'postTitle':req.body.postTitle
            }
            await tickerData.createPost(data)
            res.send("created")
        }
            
    } catch (error) {
        throw error;
    }
}

exports.tickerCreateComment = async (req, res) => {
    if(req.body.username == undefined||
        req.body.postId == undefined||
        req.body.CommentText == undefined){
        res.send({"error": "please fill out all fields."})
    }else{
        try {
            let data = {
                'postId' : req.body.postId,
                'parent_id' : req.body.parent_id,
                'username' : req.body.username,
                'commentText':req.body.commentText,
                'commentTitle':req.body.commentTitle}
            await tickerData.getPosts(data)
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
}
exports.getValue = async (req, res) => {
    // console.log("value ran")
    var options = {
        method: 'GET',
        url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-financials',
        params: {symbol: req.params.id, region: 'US'},
        headers: {
            'x-rapidapi-key': 'b0d8da8b28msh68e1787ba55e190p1d33e6jsn90e4292507de',
            'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
    };
      
    axios.request(options).then(function (response) {
        // console.log(response.data);
        if(response.data.price != undefined){
            res.send({price: response.data.price.regularMarketPrice.fmt})
        }else{
            res.send({"error":"INVALID TICKER"})
        }

    }).catch(function (error) {
        console.error(error);
    });
    
}