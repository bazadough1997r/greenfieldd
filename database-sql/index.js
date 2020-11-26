
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
var Cars = "CREATE TABLE IF NOT EXISTS cars (brand VARCHAR(20), year YEAR, price INT, description VARCHAR(250),img LONGBLOB, id INT PRIMARY KEY AUTO_INCREMENT)";
  con.query(Cars, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
  });


  for (var i = 0; i < data.length; i++) {
    var inserting = `INSERT INTO cars (brand, year, price, description) VALUES (?, ?, ?, ?)`;
    let rows = [data[i].brand, data[i].year, data[i].price, data[i].description];
    con.query(inserting, rows, function (err, results, fields) {
      if (err) throw err;
      console.log("Table inserted");
      });
  }

  //con.end();

  // connection.query(stmt, todo, (err, results, fields) => {
  //   if (err) {
  //     return console.error(err.message);
  //   }
  //   // get inserted id
  //   console.log('Todo Id:' + results.insertId);
  // });

  // connection.end();


  // for (var i = 0; i < data.length; i++) {
  //   var inserting = `INSERT INTO cars (brand, year, price, description, image) VALUES (data[i].brand, data[i].year, data[i].price, data[i].description, data[i].image)`;
  //   con.query(inserting, function (err, result) {
  //     if (err) throw err;
  //     console.log("Table inserted");
  //     });
  // }






