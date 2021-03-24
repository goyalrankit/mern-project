const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello, this is tutorial 1");
})

app.get('/about',(req,res)=>{
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