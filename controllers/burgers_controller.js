var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// API Routes

// get routes to the index file
router.get("/", function (req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
    console.log("get /burgers route")
    // callback response, getting all the burger names back
    burger.all(function (burgerData) {
        console.log("data :", burgerData);
        //  transitional function using orm.js to connect MySql query
        res.render("index", { burger_data: burgerData });
    });
});
// post route back to the index file
router.post("burgers/create", function (req, res) {
    burger.create(req.body.burger_name, function (result) {
        console.log(result);
        res.redirect("/");
    });
});

// post route back to the index file
router.put("/burgers/:id", function (req, res) {
    burger.update(req.params.id, function (result) {
        console.log(result);
        res.sendStatus(200);
    });
});

module.exports = router;