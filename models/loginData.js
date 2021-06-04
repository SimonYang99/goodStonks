const db = require("../util/database");

function addUser(newUser) {
    let query = "INSERT INTO users(username, firstname, lastname, email, password) VALUES('"
     + newUser.username + "', '"
     + newUser.fName + "', '"
     + newUser.lName + "', '"
     + newUser.email + "');";

    db.execute(query);
}


module.exports = {
    addUser,

}