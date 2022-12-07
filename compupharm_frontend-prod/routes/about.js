var express = require("express");
var path = require("path")
var router = express.Router();

/* GET about page */
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "about.html"))
});

module.exports = router;
