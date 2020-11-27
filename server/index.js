const express = require('express');
const myDB = require('../database-sql/index.js');

const bodyParser = require('body-parser');


const app = express();


app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))



app.post('/byBrand', function (req, res) {
  let query =  `SELECT * FROM cars WHERE brand = '${req.body.brand}'`
  myDB.con.query(query , function(err, results) {
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



const port = 3000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
});
