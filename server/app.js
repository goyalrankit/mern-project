const express = require('express');
const mongoose = require('mongoose');
const app = express();
const User = require('./../models/userSchema');
require('./../database/db');



//  GET JSON values
app.use(express.json());

// ROUTEs
app.use(require('./../Routes/auth'));

    
// MIDDLEWARE
const middleware = (req,res,next) =>
{
    console.log("This is middleware");
    next();
}

// ROUTES
app.get('/',(req,res)=>{
    res.send("Hello, this is tutorial 1");
})

app.get('/about',middleware,(req,res)=>{
    res.send("Hello, this is About Page");
})

app.get('/login',(req,res) =>{
    res.send("Hello, this is Login Page");
})

console.log("Working");

app.listen(3000,() =>
{
    console.log("Server is running at port 3000");
})