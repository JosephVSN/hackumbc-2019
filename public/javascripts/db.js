//import sqlite
var sqlite3 = require('sqlite3').verbose();

//create database
var db = new sqlite3.Database("ParkingPlease.db");

exports.getListing = function(callback) {
    var sqlQuery = "select * from 'Parking';";
    db.all(sqlQuery, (err, rows) => {
       if (err) {
           console.log(err);
       } else {
           console.log(rows);
           return callback(rows);
       }
    });
};