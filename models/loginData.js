const db = require("../util/database");

function addUser(newUser) {
    let query = "INSERT INTO users(username, firstname, lastname, email, password) VALUES('"
     + newUser.username + "', '"
     + newUser.fName + "', '"
     + newUser.lName + "', '"
     + newUser.email + "');";

    db.execute(query);
}

function loginUser(userData) {
    return db.execute("SELECT * FROM users WHERE username = '" 
    + userData.username + "' AND password = '" + userData.password + "';")
}

module.exports = {
    addUser,
    loginUser,
}