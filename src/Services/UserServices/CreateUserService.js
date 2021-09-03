import jwt from '../../jwt.js'
import User from '../../Models/UserModel.js';

export async function CreateUserService(name, email, password) {
    try {
        if (await User.findOne({ email })) {
            return ({ "error": "user already exists" })
        }

        const user = await User.create({ name, email, password })

        user.password = undefined

        const token = jwt.sign({ id: user.id })

        return ({ user, token })
    } catch (error) {
        console.log(error);
        return ({ "error": "registration failed" })
    }
}