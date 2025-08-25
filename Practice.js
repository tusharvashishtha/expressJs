const express = require('express')
const app = express();
require('dotenv').config();


app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        name : "Tushar",
         age : 15
        })
})

app.post("/about", (req, res) => {
    console.log(req.body);
    res.send(req.body)
    
})


app.listen(process.env.PORT);