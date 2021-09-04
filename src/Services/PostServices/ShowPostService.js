import Post from '../../Models/PostModel.js';
import User from '../../Models/UserModel.js';
import Comment from '../../Models/CommentModel.js'

export async function ShowPostService(postId) {
    try {
        const post = await Post.findById(postId).populate('author').populate('comments')

        return post
    } catch (error) {
        return ({ error: 'Error loading post' })
    }
}