var express = require("express");

var router = express.Router();

// Import the model burger.js
var burgers = require("../models/burgers.js");

// Create routes
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
    console.log(res.body)
    burgers.create([
      "name", "eaten"
    ], [
      req.body.name, req.body.eaten
    ], function(result) {
      console.log(result)
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burgers.update(
      {
        eaten: req.body.eaten
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
  });

  // Export routes for server.js 
module.exports = router;   

  
   
  
  