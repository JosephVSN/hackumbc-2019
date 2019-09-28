//import sqlite
var sqlite3 = require('sqlite3').verbose();

//create database
var db = new sqlite3.Database("ParkingPlease.db");

exports.getListing = function(callback) {
    var sqlQuery = "select * from Parking order by Time limit 25;";
    db.get(sqlQuery, (err, rows) => {
       if (err) {
           console.log(err);
       } else {
           return callback(rows);
       }
    });
};