const express = require('express');
const myDB = require('../database-sql/index.js');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

//Login
app.use(express.json());
const users = []; //imagine its my users db
const bcrypt = require('bcrypt');

app.get('/users', (req, res) => {
  res.json(users);
  res.status(201).send();
})

app.post('/users', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, 10); //10 is the salting number
    console.log(salt);
    console.log(hashedPassword);
    const user = { name: req.body.name, password: hashedPassword };
    users.push(user);
    res.status(201).send();
  } catch {
    res.status(500).send();
  }
})

//compare users from login page with db
app.post('/users/login', async (req, res) => {
  const user = users.find(user => user.name === req.body.name);
  if (user == null) {
    return res.status(400).send('Cannot find user!');
  } try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send('Login succeeded by Rawan! :P');
    } else {
      res.send('Login denied by Haneen!')
    }
  } catch {
    res.status(500).send()
  }
})

//search
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

