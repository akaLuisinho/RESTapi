const express = require('express')
router = express.Router()

const AuthController = require('./Controllers/AuthController')

router.post('/register', AuthController.Register)

module.exports = router