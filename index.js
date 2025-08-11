const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.send("Hello your server has been created");
})
app.get("/about", function(req, res){
    res.send("This is about section")
})
app.get("/contact", function(req , res){
    res.send("Contact us here!!")
})

app.listen(3000);