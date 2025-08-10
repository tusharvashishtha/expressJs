const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.send("Hello your server has been created");
}).listen(3000);