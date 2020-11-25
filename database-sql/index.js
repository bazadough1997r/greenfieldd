
var mysql = require('mysql');
var data = require('./data.json')
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "12345678"
});

con.connect(function(err) {
if (err) throw err;
console.log("Connected!");

con.query("CREATE DATABASE IF NOT EXISTS stock", function (err, result) {
if (err) throw err;
console.log("Database created");
});

var Cars = "CREATE TABLE IF NOT EXISTS cars (brand VARCHAR(20), description VARCHAR(250), year YEAR, price INT, img LONGBLOB, id INT PRIMARY KEY AUTO_INCREMENT)";
  con.query(Cars, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });



});





// con.query('INSERT INTO cars (brand, year, price,description,image ) VALUES ?', [data], function(err,result) {
//   if(err) {
//     console.log('Error');
//   }
//  else {
//   console.log('Success');
//   }
// });