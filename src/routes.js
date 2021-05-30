const express = require('express')
const router = express.Router()

const AuthController = require('./Controllers/AuthController')

router.post('/register', AuthController.Register)

router.post('/authenticate', AuthController.Authenticate)
module.exports = router