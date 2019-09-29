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

exports.addListing = function(rowData){
    var sqlQuery = "insert into Parking(Time, LocationLA, LocationLO) values("+rowData.Time+","+ rowData.LocationLA+","+ rowData.LocationLO+");";
    db.run(sqlQuery);
}

exports.removeListing = function(rowData){
    var sqlQuery = "delete from Parking where id = " + rowData.id + ";";
    db.run(sqlQuery);
}