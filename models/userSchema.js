const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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
    });

    // Password hashing
    userSchema.pre('save', async function(next){
        // Hash only password when modified
        if(this.isModified('password'))
        {
            // Hash the password remember to add await as it will return promises
            this.password = await bcrypt.hash(this.password,12);
        }
        next();
    });

    const User = mongoose.model('USER',userSchema);
    module.exports = User;



