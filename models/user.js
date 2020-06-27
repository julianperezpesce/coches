
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

//Aqui creo la colección: 'user'
const User = mongoose.model('user', userSchema)

module.exports = User
