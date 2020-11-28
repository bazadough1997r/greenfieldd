const express = require('express');
const myDB = require('../database-sql/index.js');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.post('/byBrand', function (req, res) {

  let query =  `SELECT * FROM cars WHERE brand = '${req.body.brand}' `;
  console.log(query, "query from post server")

  myDB.con.query(query , function(err, data) {
    if (!err)
    { res.send(data)
     console.log("hiiiiiiiiiiiiiiiii",data);
    }
    else
     console.log(err);
  })
});


app.post('/byYear', function (req, res) {

  let query =  `SELECT * FROM cars WHERE year = '${req.body.year}' `;
  console.log(query, "query from post server")

  myDB.con.query(query , function(err, data) {
    if (!err)
    { res.send(data)
     console.log("hiiiiiiiiiiiiiiiii",data);
    }
    else
     console.log(err);
  })
});


app.post('/byPrice', function (req, res) {

  let query =  `SELECT * FROM cars WHERE price = '${req.body.price}' `;
  console.log(query, "query from post server")

  myDB.con.query(query , function(err, data) {
    if (!err)
    { res.send(data)
     console.log("hiiiiiiiiiiiiiiiii",data);
    }
    else
     console.log(err);
  })
});
// search function
// app.post('/byBrand',function(req,res){
//  console.log("hellooooo from post serverrrrr", req.body.brand)
//  let query = 'SELECT * FROM cars WHERE brand ='
//  if(req.body.brand != ""){
//  query = `SELECT * FROM cars WHERE brand =' `+ req.body.brand +`'`;
// }
// myDB.query(query, function (error, results, fields) {
//   if (error) throw error;
//   return res.send({ error: false, data: results});
// // });
// })
//   myDB.query('SELECT * FROM cars WHERE brand =' + `${req.body.brand}` ,function(err, rows, fields) {
//   if (err) throw err;
//   var data=[];
//   for(i=0;i<rows.length;i++)
//   {
//       data.push(rows[i].songTitle);
//   }
//   res.send(JSON.stringify(data));
//   });
// });
// app.post('/byBrand', function (req, res) {
//    console.log("Im from the post in server for brand", req.body)
//   // console.log("brand: ",req.body.brand)
//   myDB.cars.find({brand: req.body.brand}).exec((err, data)=> { //i want our schema name
//      console.log(data)
//      res.send(data)
//      })
//  });
//  app.post('/byYear', function (req, res) {
//   console.log("year",req.body.year)
//    cars.Car.find({year: req.body.year}).exec((err, data)=> {
//      console.log(data)
//      res.send(data)
//      })
//  });
//  app.post('/byPrice', function (req, res) {
//   console.log("price",req.body.price)
//    cars.Car.find({price: req.body.price}).exec((err, data)=> {
//      console.log(data)
//      res.send(data)
//      })
//  });
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
});