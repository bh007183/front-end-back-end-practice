const express = require("express")
const path = require('path')
const fs = require("fs")

const PORT = process.env.PORT || 8080
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
///////////////////////////////////////////////////////

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, "/index.html"))
})

app.get('/api/index.html', function(request, response){
    fs.readFile(path.join(__dirname, "/test.json"), "UTF8", (err, data)=>{
        if(err) return err
        let dataObject = JSON.parse(data)
        const test = request.body
        console.log(test)
       
        console.log(data)
        fs.writeFile(path.join(__dirname, "/test.json"), JSON.stringify(dataObject), function(err){
        if(err) return err
        })
    })

})








//////////////////LISTENER
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })