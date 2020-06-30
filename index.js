const mongoose = require('mongoose')
const express = require('express');
const app = express();
const car = require('./routes/car');
const user = require('./routes/user');
const company = require('./routes/company');
const sale = require('./routes/sale');
const auth = require('./routes/auth');
app.use(express.json());
app.use('/api/cars', car);
app.use('/api/user', user);
app.use('/api/companies', company);
app.use('/api/sale', sale);
app.use('/api/auth', auth);
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Servidor trabajando en localhost:${port}`);
});

mongoose.connect('mongodb://localhost/carsdb', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(()=> console.log('Conectado a MongoDB'))
    .catch(e => console.log('No se ha podido establecer una conexión con MongoDB'))
//const date = require('./date')
// const morgan = require('morgan')

// app.use(morgan('tiny'))

// app.use(function (req, res, next){
//     console.log('Logged in');
//     next();
// })

