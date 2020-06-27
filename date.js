function date (req, res, next){
    console.log('Tiempo ', Date.now());
    next();
}

module.exports = date;