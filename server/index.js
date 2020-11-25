const express = require('express')

const myDB = require('../database-sql/index.js')

const dbMySQL = require('../database-sql/index')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})