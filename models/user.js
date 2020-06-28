const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');


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
    var environment = process.env.SECRET_KEY_CAR_API || 'development';
    return jwt.sign({_id: this._id, name: this.name}, environment);

}

//Aqui creo la colección: 'user'
const User = mongoose.model('user', userSchema)

module.exports = User
