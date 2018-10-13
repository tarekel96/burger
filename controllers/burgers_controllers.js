var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burgers = require("../models/burgers.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burgers.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burgers.create([
    "name", "bun", "vegan"
  ], [
    req.body.name, req.body.bun, req.body.vegan
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});