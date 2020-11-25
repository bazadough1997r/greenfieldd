// const mysql = require('mysql');

// // First you need to create a connection to the database
// // Be sure to replace 'user' and 'password' with the correct values
// const con = mysql.createConnection({
//   host: 'localhost',
//   user: 'abeer',
//   password: '0000',
//   // database: "cars",
// });

// con.connect((err) => {
//   if(err){
//     console.log('Error connecting to Db');
//     return;
//   }
//   console.log('Connection established');
// });

// con.end((err) => {
//   // The connection is terminated gracefully
//   // Ensures all remaining queries are executed
//   // Then sends a quit packet to the MySQL server.
// });


var mysql = require('mysql');
var con = mysql.createConnection({
host: "localhost",
user: "abeer",
password: "0000"
});
con.connect(function(err) {
if (err) throw err;
console.log("Connected!");
con.query("CREATE DATABASE IF NOT EXISTS stock", function (err, result) {
if (err) throw err;
console.log("Database created");
});
});