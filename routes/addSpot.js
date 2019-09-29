var express = require('express');
var router = express.Router();
var db = require('../public/javascripts/db.js')

// Request the newest 25 parking spots from the database
router.post('/', function(req, res, next) {
    console.log("Adding");
    db.addListing(req.body.time, req.body.lat, req.body.long);
});

module.exports = router;
