const express = require('express');
const myDB = require('../database-sql/index.js');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

//Login
app.use(express.json());
// app.use(cors());
// const users = []; //imagine its my users db
// const bcrypt = require('bcrypt');

// app.get('/users', (req, res) => {
//   res.json(users);
//   res.status(201).send();
// })

// app.post('/users', async (req, res) => {
//   try {
//     const salt = await bcrypt.genSalt();
//     const hashedPassword = await bcrypt.hash(req.body.password, 10); //10 is the salting number
//     console.log(salt);
//     console.log(hashedPassword);
//     const user = { username: req.body.username, password: hashedPassword };
//     users.push(user);
//     res.status(201).send();
//   } catch {
//     res.status(500).send();
//   }
// })

// //compare users from login page with db
// app.post('/users/login', async (req, res) => {
//   const user = users.find(user => user.username === req.body.username);
//   console.log(req.body);
//   if (user == null) {
//     return res.status(400).send('Cannot find user!');
//   } try {
//     if (await bcrypt.compare(req.body.password, user.password)) {
//       res.send('Login succeeded by Rawan! :P');
//     } else {
//       res.send('Login denied by Haneen!')
//     }
//   } catch {
//     res.status(500).send()
//   }
// })

//JWT Authentication
require('dotenv').config();
const jwt = require('jsonwebtoken');



const posts = [{username:"hanoon", password:"hanoona"},{username:"RoRo", password:"Rawaneh"}];

app.get('/posts', authenticateToken,(req, res) => {
  res.json(posts.filter(post => post.username === req.user.name));
})

app.post('/login', (req, res) => {
  //authenticate user step
  const username = req.body.username;
  const user = { name: username }

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken: accessToken });
})

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}


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
     res.send(results)
    })
  }

  else if(brand !== "" && year !== "" && colour !== "" && price !== "" && price == "highestToLowest"){
    let query =  `SELECT * FROM cars WHERE brand = '${brand}' AND year = '${year}' AND colour = '${colour}' ORDER BY Price DESC`
    console.log(query, "console.log(query)")
    myDB.con.query(query , function(err, results) {
     res.send(results)
    })
  }



  else if(brand !== "" && year === "" && colour === "" && price === ""){
    let query =  `SELECT * FROM cars WHERE  brand = '${brand}'`
    console.log(query, "console.log(query)")
    myDB.con.query(query , function(err, results) {
    res.send(results)
    })
 }

 else if(brand !== "" && year !== "" && colour === "" && price === ""){
    let query =  `SELECT * FROM cars WHERE  brand = '${brand}' AND year = '${year}'`
    console.log(query, "console.log(query)")
    myDB.con.query(query , function(err, results) {
    res.send(results)
    })
  }



 else if(brand !== "" && year !== "" && colour !== "" && price === ""){
  let query =  `SELECT * FROM cars WHERE  brand = '${brand}' AND year = '${year}' AND colour = '${colour}'`
  console.log(query, "console.log(query)")
  myDB.con.query(query , function(err, results) {
  res.send(results)
  })
}



 else if(brand !== "" && year === "" && colour !== "" && price === ""){
  let query =  `SELECT * FROM cars WHERE brand = '${brand}' AND colour = '${colour}'`
  console.log(query, "console.log(query)")
  myDB.con.query(query , function(err, results) {
  res.send(results)
  })
}

});


const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
});

