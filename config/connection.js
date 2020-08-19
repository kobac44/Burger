// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("sequelize_library", "root", "", {
    host: "localhost",
    port: 3306,
    user: "rot",
    password: "",
    database: "burgers_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting:" + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Exports the connection for other files to use
module.exports = connection;
