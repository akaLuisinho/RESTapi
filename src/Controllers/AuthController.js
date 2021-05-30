const bcrypt = require('bcrypt')
const jwt = require('../jwt')
const User = require('../Models/UserModel')

async function Register(req, res) {
    const { email } = req.body
    try {

        if (await User.findOne({ email })) {
            return res.status(400).send({ error: 'User Already Registered' })
        }

        const user = await User.create(req.body)

        user.password = undefined

        const token = jwt.sign({ id: user.id })

        return res.send({ user, token })
    } catch (error) {
        return res.status(400).send({ error: 'Registration Failed' })
    }
}

async function Authenticate(req, res) {
    const { email, password } = req.body

    const user = await User.findOne({ email }).select('+password')

    if (!user) {
        return res.status(400).send({ error: 'User not found' })
    }

    if (!await bcrypt.compare(password, user.password)) {
        return res.status(400).send({ error: 'Wrong password' })
    }

    user.password = undefined

    const token = jwt.sign({ id: user.id })

    return res.send({ user, token })
}

module.exports = { Register, Authenticate }