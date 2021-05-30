const express = require('express')

const User = require('../Models/UserModel')

async function Register() {
    try {
        const user = await User.create(req.body)

        return res.send({ user })
    } catch (error) {
        return res.status(400).send({ error: 'Registration Failed' })
    }
}

module.exports = { Register }