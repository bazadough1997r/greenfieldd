const express = require('express');
const myDB = require('../database-sql/index.js');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const path = require('path');
const bcrypt = require('bcrypt');
// const hashedPassword;
app.use(express.json());
app.use(cors());
require('dotenv').config();
// const cookieParser = require('cookie-parser');
// const session = require("express-session");

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

const users = []; //imagine its my users db
//save data from signup page
app.post('/users/signup', (req,res)=>{
  let firstName = req.body.firstName;
  let lastName = req.body.lastName
  let username = req.body.username
  let email = req.body.email
  let password = req.body.password
  myDB.con.query(`Insert into users (firstName, lastName, username, email, password) VALUES ('${firstName}','${lastName}','${username}','${email}','${password}')`), (err, result) => {
    if (err)
     throw err;
    }
    res.send();
})

//Login
app.get('/users', (req, res) => {
  res.json(users);
  res.status(201).send();
})

//dealing with passwords for the first time
app.post('/users', async (req, res) => {
  console.log("Hello hashing", req.body.username)
  try {
    console.log("TRY hashing")
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, 10); //10 is the salting number
    const user = {firstName:req.body.firstName, lastName:req.body.lastName, username: req.body.username,email:req.body.email, password: hashedPassword };
    users.push(user);
    //console.log(users, "users")
    // console.log(user, "user")
    res.send(user);
  } catch {
    console.log("CATCH hashing")
    res.status(500).send();
  }
})


//compare users from login page with db

app.post('/users/login', async (req, res) => {
  username = req.body.username;
  password = req.body.password;
  let query =  `SELECT * FROM users WHERE username = '${req.body.username}'`
  myDB.con.query(query , function(err, results) {
    if(results.length > 0){
      bcrypt.compare(password, results[0].password, (err, response)=>{
        if(response){
          res.send(results);
        }
        else {
          res.send("wrong username/password combination")
        }
      })
    }else {
      res.send("User doesn't exist");
    }
})
})

//JWT Authentication
// const posts = [{username:"hanoon", password:"hanoona"},{username:"RoRo", password:"Rawaneh"}];

// app.get('/posts', authenticateToken,(req, res) => {
//   res.json(posts.filter(post => post.username === req.user.name));
// })

// app.post('/login', (req, res) => {
//   //authenticate user step

//   const username = req.body.username;
//   const user = { username: username }
//   const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
//   res.json({ accessToken: accessToken });
// })

// function authenticateToken(req, res, next) {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];
//   if (token == null) return res.sendStatus(401);

//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403)
//     req.user = user
//     next()
//   })
// }


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

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/../react-client/dist/index.html'));
});

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
});