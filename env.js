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


// const express  = require('express');
// require('dotenv').config();
// const app = express();
// const path = require('path') 

// app.get('/', function(req, res){
//     res.send('<h1>This is home page<h1/>')
// })

// app.get('/about', function(req, res){
//     res.sendFile(path.join(__dirname, 'Html', 'index.html'))
// })
// app.get('/project', function(req, res){
//     res.sendFile(path.join(__dirname, 'Html', 'index2.html'))
// })

// app.get('/contact', function(req, res){
//     res.redirect(301, '/about')
//     // 301 indicates a webpage or resource has been permanently moved to a new URL
//     // 302 mean a resourse has been temp moved to a new URL
// })

// app.listen(process.env.PORT);




//middleware

// const express = require('express');
// const app = express();
// require('dotenv').config();

// app.get('/', (req, res, next)=>{
//     console.log("This is our home page");
//     next(); 
// })

// app.get('/', (req, res) => {
//     console.log("This is some more information");
//     res.send("Middleware executed")
// })

// app.listen(process.env.PORT)

const express = require("express");
const app = express();
const PORT = 3000;

// Middleware function
function logger(req, res, next) {
  console.log(`${req.method} ${req.url} - ${new Date().toLocaleString()}`);
  next(); // pass control to the next middleware/route
}

// Use the middleware for all routes
app.use(logger);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});
app.get("/contact", (req, res) => {
  res.send("contact Page");
});
app.get("/work", (req, res) => {
  res.send("work Page");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
  