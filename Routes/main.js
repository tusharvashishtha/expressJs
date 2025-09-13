const express = require('express')
const app = express();
require('dotenv').config();

app.use("/user", require('./route'))

app.get("/", (req, res) => {
    res.send("Home page");
})
app.get("/about", (req, res) => {
    res.send("About page")
})

app.listen(process.env.PORT)