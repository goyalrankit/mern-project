const express = require('express');
const routes = express.Router();
require('./../database/db');
const User = require('./../models/userSchema');
const bcrypt = require('bcryptjs');


// GET
routes.get('/', (req,res) =>{
    res.send("This page is Home page from Auth.js");    
})



// POST 
routes.post('/register',async (req,res) =>{

    // Fetching the Values from Database
    const {username,email,firstName,lastName,phone,password} = req.body;

    // No field is missing then 
    if (!username || !email || !firstName || !lastName || !phone || !password )
    {
        return  res.status(422).json({error:"One or more fields are missing"});
    }

    
    try {
    // Checks the Email if not exsist in DB then 
    const emailExist = await User.findOne( { email:email} );
    
    if(emailExist){                
                    return  res.status(422).json({error:"Email is already used. Try with New Email"});
                }
               
    // Saving the Value in Database
    const userDetails = new User({username,email,firstName,lastName,phone,password});

    // Calling the Collection
        userDetails.save();
            res.status(201).json( { message : " User registered successfully " } );
        
    } catch (error) {
        console.log(error);
    }
});


// LOGIN Route

    routes.post('/signin', async (req,res) =>{

        try {
            const { email , password} = req.body;

            if( !email || !password)
            {
                return res.status(422).json( {message:"One or more field is Empty"});
            }

            const userDetails = await User.findOne( { email: email} );

            if(userDetails)
            {
                // Checking the entered password and db password are same or not
                const verfiyDetails = await bcrypt.compare(password,userDetails.password);

                // Adding Token
                const token = await userDetails.generateJsonToken();
                console.log(token);

                // If not same 
                if( !verfiyDetails )
                {
                    res.status(400).json( {message: "Invalid Credentials"} )
                }else
                {
                    console.log(userDetails);
                    res.status(200).json( {message: "User Succefully login "} )
                }
            }else
            {
                res.status(400).json( {message: "Invalid Credentials"} )
            }
        } catch (error) {
            console.log(error);
        }
    })

module.exports = routes;