var express = require("express");
var path = require("path")
var router = express.Router();

/* GET contact page */
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "outlets.html"))
});

module.exports = router;
