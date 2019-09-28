//import sqlite
var sqlite = require ('sqlite3');

//create database
var db = new sqlite.Database("../db/ParkingPlease.db");
var getSpots = function()
{
    var sqlQuery = "select * from Parking order by Time limit 25;";
    db.get(sqlQuery, (err, rows) => {
       if(err){
           console.log(err);
       } 
       else{
           return rows;
       }
    })
}
//add to db
//remove form db
//delete db