//import sqlite
var sqlite = require ('sqlite3');

//create database
var db = new sqlite.Database("../db/ParkingPlease.db");
var getSpots = function()
{
    var sqlQuery = "select * from Parking order by Time limit 25;";
    
}
//add to db
//remove form db
//delete db