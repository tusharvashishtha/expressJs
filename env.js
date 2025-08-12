// const express = require('express');
// require('dotenv').config();
// const app = express();

// app.get("/", function(req , res){
//     res.send("This is home page!");
// })

// app.get("/about", function(req, res){
//     res.send("This is our about page")
// })


// app.listen(process.env.PORT)


const express  = require('express');
require('dotenv').config();
const app = express();
const path = require('path')

app.get('/', function(req, res){
    res.send('<h1>This is home page<h1/>')
})

app.get('/about', function(req, res){
    res.sendFile(path.join(__dirname, 'Html', 'index.html'))
})
app.get('/project', function(req, res){
    res.sendFile(path.join(__dirname, 'Html', 'index2.html'))
})

app.get('/contact', function(req, res){
    res.redirect(301, '/about')
    // 301 indicates a webpage or resource has been permanently moved to a new URL
    // 302 mean a resourse has been temp moved to a new URL
})

app.listen(process.env.PORT);