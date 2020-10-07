const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

//requesting all objs from database to handlebars view
router.get("/", (req, res) => {
  burger.selectAll((data) => {
    let hdbrsObj = {
      burgers: data,
    };

    res.render("index", hdbrsObj);
  });
});

//adding a burger by posting it to the database
router.post("/api/burgers", (req, res) => {
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    (result) => {
      res.json({ id: result.insertId });
    }
  );
});

//updating api burger by id to devoured
router.put("/:id", function (req, res) {
  // console.log("THING " + req.params.id);
  //var condition = "id = " + req.params.id;
  burger.updateOne([req.params.id], function (result) {
    console.log(result);
    res.redirect(303, "/");
  });
});

//delete a burger from api id and removing from database and view
router.delete("/:id", function (req, res) {
  burger.deleteOne([req.params.id], function (result) {
    console.log(result);
    res.redirect(303, "/");
  });
  console.log(req);
});
module.exports = router;
