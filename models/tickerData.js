const db = require("../util/database");

function getPosts(ticker) {
    let query = `SELECT * FROM posts WHERE ticker = '${ticker}' ORDER BY post_date DESC limit 10`
    return db.query(query)

}
function getAllPosts() {
    let query = `SELECT * FROM posts ORDER BY post_date DESC limit 10`
    return db.query(query)

}
function getCommentsCount(post_id) {
    let query = `SELECT COUNT(post_id) FROM posts WHERE post_id = ${post_id}`
    return db.query(query)

}
function getPost(post_id) {
    let query = `SELECT * FROM posts WHERE post_id = '${post_id}'`;
    post =  db.query(query);
    query = `SELECT * FROM comments WHERE post_id = '${post_id}' ORDER BY comment_date DESC`;
    comments =  db.query(query);
    return [post,comments]
}
function addPost(postDetails) {
    var now = new Date().toUTCString();
    let query = "INSERT INTO posts (username, ticker, post_date, post_text, post_title) VALUES('"
     + postDetails.username + "', '"
     + postDetails.ticker + "', '"
     + now + "', '"
     + postDetails.postText + "', '"
     + postDetails.postTitle + "');";

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
    query = `UPDATE Posts SET comment_count = comment_count + 1 WHERE post_id = ${commentDetails.postId}`
    db.execute(query);

}

module.exports = {
    getPosts: getPosts,
    getAllPosts: getAllPosts,
    getPost: getPost,
    createPost : addPost,
    createComment : addComment,
    getCommentsCount: getCommentsCount, 
}