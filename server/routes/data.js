var express = require('express');
var router = express.Router();
var trivia = require('../public/data/trivia');

router.get('/', function(req, res){
    res.send(trivia);
});

module.exports = router;