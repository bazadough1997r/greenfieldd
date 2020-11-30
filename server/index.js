const express = require('express');
const myDB = require('../database-sql/index.js');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.post('/search', function (req, res) {
  let brand = req.body.object.brand;
  let year = req.body.object.year;
  let colour = req.body.object.colour;
  let price = req.body.object.price;

  if(brand !== "" && year !== "" && colour !== "" && price !== "" && price == "lowestToHighest"){
    let query =  `SELECT * FROM cars WHERE brand = '${brand}' AND year = '${year}' AND colour = '${colour}' ORDER BY Price ASC`
    console.log(query, "console.log(query)")
    myDB.con.query(query , function(err, results) {
    console.log(results, "console.log(results)")
     res.send(results)
    })
  }

  else if(brand !== "" && year !== "" && colour !== "" && price !== "" && price == "highestToLowest"){
    let query =  `SELECT * FROM cars WHERE brand = '${brand}' AND year = '${year}' AND colour = '${colour}' ORDER BY Price DESC`
    console.log(query, "console.log(query)")
    myDB.con.query(query , function(err, results) {
    console.log(results, "console.log(results)")
     res.send(results)
    })
  }



  else if(brand !== "" && year === "" && colour === "" && price === ""){
    let query =  `SELECT * FROM cars WHERE  brand = '${brand}'`
    console.log(query, "console.log(query)")
    myDB.con.query(query , function(err, results) {
    console.log(results, "console.log(results)")
    res.send(results)
    })
 }

 else if(brand !== "" && year !== "" && colour === "" && price === ""){
    let query =  `SELECT * FROM cars WHERE  brand = '${brand}' AND year = '${year}'`
    console.log(query, "console.log(query)")
    myDB.con.query(query , function(err, results) {
    console.log(results, "console.log(results)")
    res.send(results)
    })
  }



 else if(brand !== "" && year !== "" && colour !== "" && price === ""){
  let query =  `SELECT * FROM cars WHERE  brand = '${brand}' AND year = '${year}' AND colour = '${colour}'`
  console.log(query, "console.log(query)")
  myDB.con.query(query , function(err, results) {
  console.log(results, "console.log(results)")
  res.send(results)
  })
}



 else if(brand !== "" && year === "" && colour !== "" && price === ""){
  let query =  `SELECT * FROM cars WHERE brand = '${brand}' AND colour = '${colour}'`
  console.log(query, "console.log(query)")
  myDB.con.query(query , function(err, results) {
  console.log(results, "console.log(results)")
  res.send(results)
  })
}

});


const port = 3000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
});

