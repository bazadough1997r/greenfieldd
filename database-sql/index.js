var mysql = require('mysql');
var data = require('./data.json');

//edit your user and password
//our database called stock
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "Fedaa2001@@$$",
database : "stock"
});

//connecting mysql and creating a 2 tables in our stock; called cars and users
con.connect(function(err) {
if (err) throw err;
console.log("MySQL Connected!!!");
var Cars = "CREATE TABLE IF NOT EXISTS cars (brand VARCHAR(20), year YEAR, price INT, description VARCHAR(250),image LONGBLOB, id INT PRIMARY KEY )";
con.query(Cars, function (err, result) {
  if (err) throw err;
  console.log("Cars Table created!!!");
  });
  var Users = "CREATE TABLE IF NOT EXISTS users (name VARCHAR(20), email INT, id INT PRIMARY KEY, phonenumber INT)";
  con.query(Users, function (err, result) {
    if (err) throw err;
    console.log("Users Table created!!!");
    });
});

//save function to see our dummy data in the mysql terminal (insert data in the columns)
// for (var i = 0; i < data.length; i++) {
//   var inserting = `REPLACE INTO cars (brand, year, price, description, image,id) VALUES (?, ?, ?, ?, ?,?) `;
//   let rows = [data[i].brand, data[i].year, data[i].price, data[i].description,data[i].image,i+1];
//   con.query(inserting, rows, function (err, results, fields) {
//     if (err) throw err;
//     console.log("Table inserted");
//     });
// }

//save function to see user input in the mysql terminal (insert data in the columns)


module.exports.con = con;