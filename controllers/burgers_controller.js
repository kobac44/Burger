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
router.put("/api/burgers/:id", (req, res) => {
  let condition = "id = " + req.params.id;

  burger.updateOne({ devoured: req.body.devoured }, condition, (result) => {
    // If no rows were changed, then the ID must not exist, so 404
    if (result.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
//delete a burger from api id and removing from database and view
router.delete("/api/burgers/:id", (req, res) => {
  let condition = "id = " + req.params.id;

  burger.delete(condition, (result) => {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
module.exports = router;
