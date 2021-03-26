const express = require('express');
const routes = express.Router();
require('./../database/db');
const User = require('./../models/userSchema');

// GET
routes.get('/', (req,res) =>{
    res.send("This page is Home page from Auth.js");    
})



// POST 
routes.post('/register',(req,res) =>{

    // Fetching the Values from Database
    const {username,email,firstName,lastName,phone,password} = req.body;

    // No field is missing then 
    if (!username || !email || !firstName || !lastName || !phone || !password )
    {
        return  res.status(422).json({error:"One or more fields are missing"});
    }

    // Checks the Email if not exsist in DB then 
    User.findOne( { email:email} )
        .then((values) =>{
               if(values) {                
                    return  res.status(422).json({error:"Email is already used. Try with New Email"});
               }
               
               
               // Saving the Value in Database
               const userDetails = new User({username,email,firstName,lastName,phone,password});

               // Calling the Collection
               userDetails.save().then( () => {
                res.status(201).json( { message : " User registered successfully " } );
               })
               .catch( (err) => res.status(500).json( { message : "Failed to registered "}));
                
    }).catch(err => {   console.log(err);   });        
});




module.exports = routes;