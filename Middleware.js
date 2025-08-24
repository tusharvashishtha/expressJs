//type 3 middleware
const express = require('express');
const app = express();

// function mid1(req, res, next) {
//     console.log("This id middleware 1")
//     next()
// }

// function mid2(req, res, next) {
//     console.log("This id middleware 2")
//     next()

    
// }
// function mid3(req, res, next) {
//     console.log("This id middleware 3")
//     next()

// }

// app.get("/", (req, res) => {
//     res.send("Home page")
// })

// app.get('/about', [mid1, mid2, mid3], (req, res) => {
//     res.send("About page")
//     console.log("you're on about page")
// })

// app.listen(3000)



// another way of type 3rd middle ware and it is very very important 


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

const middlewareMapping = {
    type1Api : [mid1 , mid3],
    type2Api : [mid1, mid2],
    type3Api : [mid3]
}

const bindingofMiddlewareMapping = {
    'first' : 'type1Api',
    'second' : 'type2Api'
}


app.get("/", (req, res) => {
    res.send("Home page")
})

app.get('/about', middlewareMapping[bindingofMiddlewareMapping['second']] , (req, res) => {
    res.send("About page")
    console.log("you're on about page")
})

app.listen(3000)
