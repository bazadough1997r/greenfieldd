require("dotenv").config();
const express = require('express');
const myDB = require('../database-sql/index.js');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const path = require('path');
const bcrypt = require('bcrypt');

app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//Get request to render all cars in stock table when opening the inventory page.
app.get("/allcars", (req, res) => {
    let query = `SELECT * FROM cars`
    myDB.con.query(query, (err, results) => {
        res.send(results)
    })
})

const users = [];
//save data from signup page to users table
app.post('/signup', (req, res) => {
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

//dealing with passwords for the first time
app.post('/users', async (req, res) => {
    console.log("Hello hashing", req.body.username)
    try {
        console.log("TRY hashing")
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, 10); //10 is the salting number
        const user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        };
        users.push(user);
        res.send(user);
    } catch {
        console.log("CATCH hashing")
        res.status(500).send();
    }
})

//compare users from login page with db
app.post('/login', async (req, res) => {

    var username = req.body.username;
    var password = req.body.password;
    let query = `SELECT * FROM users WHERE username = '${req.body.username}'`
    myDB.con.query(query, function(err, results) {
        if (results.length > 0) {
            bcrypt.compare(password, results[0].password, (err, response) => {
                if (response) {
                    const accessToken = jwt.sign({
                        username: username
                    }, process.env.ACCESS_TOKEN_SECRET);
                    res.json({
                        accessToken: accessToken
                    });
                } else {
                    res.send("wrong username/password combination")
                }
            })
        } else {
            res.send("User doesn't exist");
        }
    })
})

function authenticateToken(req, res, next) {
    console.log(req.query.token.accessToken, "evvvvvvv");
    //console.log(req.query.token, "from posts server")
    const token = req.query.token.accessToken;
    if (!token)
        res.status(400).send("we need a token");
    else {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) res.status(400).send("you failed to authenticate")
            req.userId = user;
            next()
        })
    }
}

app.get('/posts', authenticateToken, (req, res) => {
    res.status(200).send("you are Authenticated");
})

//search a car by filtering
app.post('/inventory', (req, res) => {
    let brand = req.body.object.brand;
    let year = req.body.object.year;
    let colour = req.body.object.colour;
    let price = req.body.object.price;

    if (brand !== "" && year !== "" && colour !== "" && price !== "" && price == "lowestToHighest") {
        let query = `SELECT * FROM cars WHERE brand = '${brand}' AND year = '${year}' AND colour = '${colour}' ORDER BY Price ASC`
        myDB.con.query(query, (err, results) => {
            res.send(results)
        })
    } else if (brand == "all") {
        let query = `SELECT * FROM cars`
        myDB.con.query(query, (err, results) => {
            res.send(results)
        })
    } else if (brand !== "" && year !== "" && colour !== "" && price !== "" && price == "highestToLowest") {
        let query = `SELECT * FROM cars WHERE brand = '${brand}' AND year = '${year}' AND colour = '${colour}' ORDER BY Price DESC`
        myDB.con.query(query, (err, results) => {
            res.send(results)
        })
    } else if (brand !== "" && year === "" && colour === "" && price === "") {
        let query = `SELECT * FROM cars WHERE  brand = '${brand}'`
        myDB.con.query(query, (err, results) => {
            res.send(results)
            console.log(results)
        })
    } else if (brand !== "" && year !== "" && colour === "" && price === "") {
        let query = `SELECT * FROM cars WHERE  brand = '${brand}' AND year = '${year}'`
        myDB.con.query(query, (err, results) => {
            res.send(results)
        })
    } else if (brand !== "" && year !== "" && colour !== "" && price === "") {
        let query = `SELECT * FROM cars WHERE  brand = '${brand}' AND year = '${year}' AND colour = '${colour}'`
        myDB.con.query(query, (err, results) => {
            res.send(results)
        })
    } else if (brand !== "" && year === "" && colour !== "" && price === "") {
        let query = `SELECT * FROM cars WHERE brand = '${brand}' AND colour = '${colour}'`
        myDB.con.query(query, (err, results) => {
            res.send(results)
        })
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../react-client/dist/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
});

