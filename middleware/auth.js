const jwt = require('jsonwebtoken')

function auth(req, res, next){
    const jwtToken = req.header('Authorization')
    if(!jwtToken) return res.status(401).send('Acceso denegado. Necesita un Token')

    try {        
        // let environment = process.env.SECRET_KEY_JWT_CAR_API || 1234
        const payload = jwt.verify(jwtToken, process.env.KEY_API_CAR)
        req.user = payload
        next()
    } catch (error) {
        res.status(400).send('Acceso denegado. Token no válido')
    }
}

module.exports = auth