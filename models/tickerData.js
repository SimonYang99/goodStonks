const db = require("../util/database");

function getPosts(ticker) {
    let query = `SELECT * FROM posts WHERE ticker = ${ticker} ORDER BY date DESC`;
    return db.query(query);
}
function getPost(data) {
    let query = `SELECT FROM posts WHERE post_id = ${post_id}`;
    post =  db.execute(query);
    query = `SELECT FROM comments WHERE post_id = ${post_id} ORDER BY date DESC`;
    comments =  db.execute(query);
    return [post,comments]
}
function addPost(postDetails) {
    let query = "INSERT INTO users(username, ticker, post_date, post_text) VALUES('"
     + postDetails.username + "', '"
     + postDetails.ticker + "', '"
     + "GETDATE()" + "', '"
     + postDetails.postText + "');";

    db.execute(query);
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