import Post from '../../Models/PostModel.js';

export async function DeletePostService(postId) {
    try {
        await Post.findByIdAndDelete(postId)

        return
    } catch (error) {
        return ({ error: 'Error deleting post' })
    }
}