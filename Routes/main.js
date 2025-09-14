const express = require('express')
const app = express();
require('dotenv').config();



app.get("/", (req, res) => {
    res.send("Home page");
})
app.get("/about", (req, res) =>   {
    res.send("About page")
})

app.get("/blog/:blogid", ( req, res ) => {
    res.send(req.params.blogid)  //that's how we access params
})

app.get("/query" , (req, res) => {
    res.send(req.query);  //that's how we access query params
})

app.listen(process.env.PORT)