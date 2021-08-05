import jwt from '../../jwt.js'
import User from '../../Models/UserModel.js';
import bcrypt from 'bcrypt'

export async function AuthenticateUserService(email, password) {
    const user = await User.findOne({ email }).select('+password')

    if (!user) {
        return ({ "error": "User not found" })
    }

    if (!await bcrypt.compare(password, user.password)) {
        return ({ "error": "Wrong password" })
    }

    user.password = undefined

    const token = jwt.sign({ id: user.id })

    return ({ user, token })
}