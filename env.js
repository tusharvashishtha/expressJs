const express = require('express');
require('dotenv').config();
const app = express();

app.get("/", function(req , res){
    res.send("This is home page!");
})

app.get("/about", function(req, res){
    res.send("This is our about page")
})


app.listen(process.env.PORT)