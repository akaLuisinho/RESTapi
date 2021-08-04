import Post from '../../Models/PostModel.js';

export async function ShowPostService(postId) {
    try {
        const post = await Post.findById(postId).populate('author').populate('comments')

        return ({ post })
    } catch (error) {
        console.log(error);
        return ({ error: 'Error loading post' })
    }
}