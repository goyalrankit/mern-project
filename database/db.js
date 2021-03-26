const express = require('express');
const mongoose = require('mongoose');


// DB CONNECTION
const DB = "mongodb+srv://rankit:goyal@cluster0.ksihu.mongodb.net/project?retryWrites=true&w=majority";


// Connnecting To DB
const database = mongoose.connect(DB,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }).then(() =>{
         console.log("Connected");
    }).catch( ()=> console.log("Not Connected"));


module.exports = database;
