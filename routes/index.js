var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/login', function(req, res){
	res.send("response received")
});


module.exports = router;
console.log("index.js");