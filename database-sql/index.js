
var mysql = require('mysql');

var data = require('./data.json');

var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "12345678",
database : "stock"
});

con.connect(function(err) {
if (err) throw err;
console.log("Connected!");
var Cars = "CREATE TABLE IF NOT EXISTS cars (brand VARCHAR(20), description VARCHAR(250), year YEAR, price INT, img LONGBLOB, id INT PRIMARY KEY AUTO_INCREMENT)";
  con.query(Cars, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
  });


