const db = require("../util/database");

async function registerUser(newUser) {

    if(!newUser.password == newUser.confirmPassword) {

    }

    const query = "INSERT INTO users(username, firstname, lastname, email, password)";
}