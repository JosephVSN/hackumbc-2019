var express = require('express');
var router = express.Router();
var db = require('../public/javascripts/db.js')

// Request the newest 25 parking spots from the database
router.post('/', function(req, res, next) {
    console.log("HERE" + req.body.id);
    db.removeListing(req.body.id);
});

module.exports = router;
