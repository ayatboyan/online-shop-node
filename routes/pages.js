var express = require('express');
var router = express.Router();

//export
module.exports = router;

//HOME / INDEX
router.get('/', function(req, res){
	res.render("index", {
		title : 'Home'
	});
});
