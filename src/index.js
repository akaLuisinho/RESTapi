const express = require('express')
const router = require('./routes')
const app = express()

app.use(express.json())

app.use(router)
app.use(express.urlencoded({ extended: true }))

app.listen(3000)