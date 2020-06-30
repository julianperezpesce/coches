const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,        
    },
    isCustomer: Boolean,
    email:{
        type: String,
        required: true,
        unique: true
    }, 
    password:{
        type: String,
        required: true
    },     
    isAdmin: Boolean,      
    date:{type: Date, default: Date.now}
})

userSchema.methods.generateJWT = function(){
    // let environment = process.env.SECRET_KEY_JWT_CAR_API || 1234;
    return jwt.sign({
        _id: this._id, 
        name: this.name,
        isAdmin: this.isAdmin
    }, process.env.KEY_API_CAR
    //'password'
    );
}

//Aqui creo la colección: 'user'
const User = mongoose.model('user', userSchema)

module.exports = User
