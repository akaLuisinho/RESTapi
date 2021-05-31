const User = require('../Models/UserModel')

async function showUsers(req, res) {
    const users = await User.find()

    return res.send({ users })
}

module.exports = { showUsers }