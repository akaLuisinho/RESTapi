import User from '../../Models/UserModel.js';

export async function ShowPostByUserService(email) {
    try {
        const postsByUser = await User.findOne({ email })

        return ({ postsByUser })
    } catch (error) {
        console.log(error);
        return ({ error: 'Error loading posts from this user' })
    }
}