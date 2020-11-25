var mysql = require('mysql');
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "Lousan97*",
database: "stock"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var Cars = "CREATE TABLE IF NOT EXISTS cars (id INT, brand VARCHAR(20), description VARCHAR(250), )";
  con.query(Cars, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

// con.connect(function(err) {
// if (err) throw err;
// console.log("Connected!");
// con.query("CREATE DATABASE IF NOT EXISTS stock", function (err, result) {
// if (err) throw err;
// console.log("Database created");
// });
// });

// var Cars = "CREATE TABLE cars (year VARINTEGER(4),  price VARsmallmoney, img VARimage)";