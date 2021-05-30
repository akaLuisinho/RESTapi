const express = require('express')

const User = require('../Models/UserModel')

async function Register(req, res) {
    const { email } = req.body
    try {

        if (await User.findOne({ email })) {
            return res.status(400).send({ error: 'User Already Registered' })
        }

        const user = await User.create(req.body)
        user.password = undefined

        return res.send({ user })
    } catch (error) {
        return res.status(400).send({ error: 'Registration Failed' })
    }
}

module.exports = { Register }