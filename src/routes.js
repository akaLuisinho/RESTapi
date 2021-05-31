const express = require('express')
const router = express.Router()

const auth = require('./Middlewares/Auth')
const AuthController = require('./Controllers/AuthController')
const UserController = require('./Controllers/UserController')

router.post('/register', AuthController.Register)

router.post('/authenticate', AuthController.Authenticate)

router.get('/', auth, UserController.showUsers)

module.exports = router