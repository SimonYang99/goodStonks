const db = require("../util/database");

function addUser(newUser) {
    let query = "INSERT INTO users(username, firstname, lastname, email, password) VALUES('"
     + newUser.username + "', '"
     + newUser.fName + "', '"
     + newUser.lName + "', '"
     + newUser.email + "', '"
     + newUser.password + "');";

    return db.query(query);
}

function getUser(userData) {
    return db.query("SELECT * FROM users WHERE username = '" 
    + userData.username + "' AND password = '" + userData.password + "';")
}

module.exports = {
    getUser,
    addUser,
}