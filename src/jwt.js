const jwt = require('jsonwebtoken')

const secret = '7011B12039B74A2748DA225C9EE568E8FDA4FF9771DCE6B36B1950557E3F8D3C'

sign = (payload) => jwt.sign(payload, secret, { expiresIn: 86400 })
verify = (token) => jwt.verify(token, secret)

module.exports = { sign, verify }