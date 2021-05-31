const { TokenExpiredError } = require('jsonwebtoken')
const jwt = require('../jwt')

module.exports = function (req, res, next) {
    const headerToken = req.headers.authorization

    if (!headerToken) {
        return res.status(401).send({ error: 'No token provided' })
    }

    const [scheme, token] = headerToken.split(' ')

    if (!token) {
        return res.status(401).send({ error: 'Token error' })
    }

    try {
        const user = jwt.verify(token)

        req.user = user.id

        return next()
    } catch (error) {
        return res.status(401).send({ error: 'Invalid token' })
    }

}