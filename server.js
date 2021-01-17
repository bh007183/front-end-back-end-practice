const express = require("express")
const path = require('path')
const fs = require("fs")


const PORT = process.env.PORT || 8080
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.set('/', path.join(__dirname, 'views'))

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })