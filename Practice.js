const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.json())
app.get('/' , (req, res) => {
    res.send('This is our home page')
})

app.post('/about', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

app.listen(process.env.PORT);
