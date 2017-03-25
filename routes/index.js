var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  res.render('index', { title: 'Express' });
});

module.exports = router;
=======
  res.render('index');
});

router.get('/login', function(req, res){
	res.send("response received")
});


module.exports = router;
console.log("index.js");
>>>>>>> 165a96acef3474bf8f676be8a3fc2691f6f951b3
