const mongoose = require('mongoose')
const {companySchema} = require('./company')

const carSchema = new mongoose.Schema({
    // company:{
    //     // type: String,
    //     // required: true,
    //     // uppercase: true,
    //     // trim: true,
    //     // minlength: 3,
    //     // maxlength: 99,
    //     // enum: ['BMW', 'AUDI', 'SEAT']
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'companies'
    // },
    company: {
        type: companySchema,
        required: true
    },
    model: String,
    sold: Boolean,
    price:{
        type: Number,
        required: function(){
            return this.sold
        }
    },
    year: {
        type: Number,
        min: 2000,
        max: 2030
    },
    extras: [String],
    date: {type: Date, default: Date.now}
})

//Aqui creo la colección: 'car'
const Car = mongoose.model('car', carSchema)

module.exports = Car