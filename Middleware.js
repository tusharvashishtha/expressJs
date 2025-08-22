//type 3 middleware
const express = require('express');
const app = express();

function mid1(req, res, next) {
    console.log("This id middleware 1")
    next()
}

function mid2(req, res, next) {
    console.log("This id middleware 2")
    next()

    
}
function mid3(req, res, next) {
    console.log("This id middleware 3")
    next()

}

app.get("/", (req, res) => {
    res.send("Home page")
})

app.get('/about', [mid1, mid2, mid3], (req, res) => {
    res.send("About page")
    console.log("you're on about page")
})

app.listen(3000)
