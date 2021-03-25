const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            unique:String,
        },
        firstName:{
            type:String,
            required:true,
        },
        lastName:{
            type:String,
            required:true,
        },
        phone:{
            type:Number,
            required:true,
        },
        password:{
            type:String,
            required:true,
        },       
        dateCreated:{
            type:Date,
            required:true,
        },
    });

    const User = mongoose.model('USER',userSchema);
    module.exports = User;



