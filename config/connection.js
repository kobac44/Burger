// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("burgers_db", "root", "", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Successful Connection!');
    })
    .catch(err => {
        console.log('no connection')
    });

// connection.connect(function (err) {
//     if (err) {
//         console.error("error connecting:" + err.stack);
//         return;
//     }
//     console.log("connected as id " + connection.threadId);
// });

// Exports the connection for other files to use
module.exports = sequelize;