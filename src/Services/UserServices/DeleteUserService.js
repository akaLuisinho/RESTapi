import User from '../../Models/UserModel.js';

export async function DeleteUserService(email) {
    try {
        await User.findOneAndDelete({ email })

    } catch (error) {
        return ({ "error": "deleting user failed" })
    }
}