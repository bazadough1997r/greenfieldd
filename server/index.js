const express = require('express');
const myDB = require('../database-sql/index.js');

const bodyParser = require('body-parser');


const app = express();


app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))



app.post('/byBrand', function (req, res) {
  // let query = "";
  // if((req.body.year)=== undefined){
  //   let query =  `SELECT * FROM cars WHERE brand = '${req.body.brand}' AND  price = ${req.body.price}`
  // }
  //  else if((req.body.price)=== undefined){
  //   let query =  `SELECT * FROM cars WHERE brand = '${req.body.brand}' AND  year = ${req.body.year} `
  // }

  // else if((req.body.price) === undefined && (req.body.year)=== undefined){
  //   let query =  `SELECT * FROM cars WHERE brand = '${req.body.brand}'`
  // }

  let query =  `SELECT * FROM cars WHERE brand = '${req.body.brand}'`
  console.log(query, "helloooooooooooooooooooooo")
  myDB.con.query(query , function(err, results) {
    console.log(results, "hiiiiiiiiiiiiiiiiiiiiii")
    res.send(results)
    })
});


app.post('/byYear', function (req, res) {
  let query =  `SELECT * FROM cars WHERE year = '${req.body.year}'`
  myDB.con.query(query , function(err, results) {
    res.send(results)
    })
});


app.post('/byPrice', function (req, res) {
  let query =  `SELECT * FROM cars WHERE price = '${req.body.price}'`
  myDB.con.query(query , function(err, results) {
    res.send(results)
    })
});

// app.post('/byPrice', function (req, res) {
//   let query =  `SELECT * FROM cars WHERE price  BETWEEN 9000 AND 10000 OR BETWEEN 11000 AND 12000`'${req.body.price}'
//   myDB.con.query(query , function(err, results) {
//     res.send(results)
//     })
// });


const port = 3000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
});
