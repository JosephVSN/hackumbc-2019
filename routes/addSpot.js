var express = require('express');
var router = express.Router();
var db = require('../public/javascripts/db.js')

// Request the newest 25 parking spots from the database
router.get('/', function(req, res, next) {
    console.log("adding");
});

module.exports = router;
