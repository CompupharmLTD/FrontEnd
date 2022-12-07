var express = require("express");
var path = require("path")
var router = express.Router();

/* GET signin page */
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "signin.html"))
});

module.exports = router;
