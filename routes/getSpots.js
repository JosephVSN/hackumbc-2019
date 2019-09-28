var express = require('express');
var router = express.Router();
var db = require('../public/javascripts/db.js')

// Request the newest 25 parking spots from the database
router.get('/getSpots', function(req, res) {
    var emptySpots = db.getSpots();
    return res.send(emptySpots);
});

module.exports = router;
