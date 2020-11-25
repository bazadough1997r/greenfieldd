
var mysql = require('mysql');
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "Fedaa2001@@$$"
});
con.connect(function(err) {
if (err) throw err;
console.log("Connected!");
con.query("CREATE DATABASE IF NOT EXISTS stock", function (err, result) {
if (err) throw err;
console.log("Database created");
});
});
