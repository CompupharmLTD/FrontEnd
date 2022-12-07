var express = require("express");
var path = require("path")
var router = express.Router();

/* GET signup page */
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "signup.html"))
});

module.exports = router;
