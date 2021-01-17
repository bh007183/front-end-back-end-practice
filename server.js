const express = require("express")
const path = require('path')
const fs = require("fs")
const countryArray = []
const PORT = process.env.PORT || 5000
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
///////////////////////////////////////////////////////

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, "/index.html"))
})

app.get('/api/country', function(request, response){
    fs.readFile(path.join(__dirname,"test.json"), "utf8", (err, data)=>{
        const sam = JSON.parse(data)
        response.json(sam)
    })
})

app.post('/api/country', function(request, response){
    fs.readFile(path.join(__dirname,"test.json"), "utf8", (err, data)=>{
        const sam = JSON.parse(data)
        sam.push(request.body)
    fs.writeFile(path.join(__dirname,"test.json"), JSON.stringify(sam), (err)=>{
        if (err) throw err
         response.json(request.body)   
    })
})
})


//////////////////LISTENER
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })