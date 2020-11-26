var mysql = require('mysql');
var data = require('./data.json')

// var data = JSON.parse(body);
// var responseJson = JSON.stringify(data.response);


var con = mysql.createConnection({
host: "localhost",
user: "abeer",
password: "0000",
database: "stock"
});



con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

con.query("CREATE DATABASE IF NOT EXISTS stock", function (err, result) {
 if (err) throw err;
 console.log("Database created");

  // var Cars = "CREATE TABLE IF NOT EXISTS cars (brand VARCHAR(20), year VARINTEGER(4),  price VARsmallmoney,description VARCHAR(250), img VARimage)";
  // con.query(Cars, function (err, result) {
  // if (err) throw err;
  // console.log("Table created");

  });
});




