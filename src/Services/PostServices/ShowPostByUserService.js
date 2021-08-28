import User from '../../Models/UserModel.js';
import Post from '../../Models/PostModel.js';

export async function ShowPostByUserService(email) {
    try {
        const user = await User.findOne({ email });

        const postsByUser = await Post.find({ author: user.id })

        return ({ postsByUser })
    } catch (error) {
        return ({ error: 'Error loading posts from this user' })
    }
}