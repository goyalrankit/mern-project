const express = require('express');
const mongoose = require('mongoose');
const app = express();
const User = require('./../models/userSchema');





// DB CONNECTION
const DB = "mongodb+srv://rankit:goyal@cluster0.ksihu.mongodb.net/project?retryWrites=true&w=majority";

mongoose.connect(DB,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }).then(() =>{
         console.log("Connected");
    }).catch( ()=> console.log("Not Connected"))


    
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