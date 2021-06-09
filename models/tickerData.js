const db = require("../util/database");

function getPosts(ticker) {
    let query = `SELECT * FROM posts WHERE ticker = '${ticker}' ORDER BY post_date DESC`
    return db.query(query)

}
function getPost(post_id) {
    let query = `SELECT FROM posts WHERE post_id = '${post_id}'`;
    post =  db.query(query);
    query = `SELECT FROM comments WHERE post_id = '${post_id}' ORDER BY comment_date DESC`;
    comments =  db.query(query);
    return [post,comments]
}
function addPost(postDetails) {
    var now = new Date().toLocaleString()
    let query = "INSERT INTO posts (username, ticker, post_date, post_text,post_title) VALUES('"
     + postDetails.username + "', '"
     + postDetails.ticker + "', '"
     + now + "', '"
     + postDetails.post_text + "', '"
     + postDetails.post_title + "');";

    db.query(query);
}
function addComment(commentDetails) {
    let query = "INSERT INTO users(post_id, parent_id, username, comment_date, comment_text) VALUES('"
     + commentDetails.postId + "', '"
     + commentDetails.parentId + "', '"
     + commentDetails.username + "', '"
     + "GETDATE()" + "', '"
     + commentDetails.commentText + "');";

    db.execute(query);
}

// function loginUser(userData) {
//     return db.execute("SELECT * FROM users WHERE username = '" 
//     + userData.username + "' AND password = '" + userData.password + "';")
// }

module.exports = {
    getPosts: getPosts,
    getPost: getPost,
    createPost : addPost,
    createComment : addComment, 
}