import Post from '../../Models/PostModel.js';

export async function UpdatePostService(postId, title, text) {
    try {
        const updatedPost = await Post.findByIdAndUpdate(postId, { title, text }, { new: true })

        return ({ updatedPost })
    } catch (error) {
        console.log(error);
        return ({ error: 'Error updating post' })
    }
}