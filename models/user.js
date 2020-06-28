const jwt = require('jsonwebtoken');

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,        
    },
    email:{
        type: String,
        required: true,
        unique: true
    }, 
    password:{
        type: String,
        required: true
    },
    isCustomer: Boolean,       
    date:{type: Date, default: Date.now}
})

userSchema.methods.generateJWT = function(){
    return jwt.sign({_id: user._id, name: user.name}, 'password');

}

//Aqui creo la colección: 'user'
const User = mongoose.model('user', userSchema)

module.exports = User
