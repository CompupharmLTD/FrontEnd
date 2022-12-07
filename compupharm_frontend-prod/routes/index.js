var express = require('express');
var path = require("path")
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"))
});

module.exports = router;
