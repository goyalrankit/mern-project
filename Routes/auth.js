const express = require('express');
const routes = express.Router();


// GET
routes.get('/', (req,res) =>{
    res.send("This page is Home page from Auth.js");    
})

// POST 
routes.post('/register',(req,res) =>{
    console.log(req.body);
        res.json({message:req.body});
});




module.exports = routes;