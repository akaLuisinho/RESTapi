import Post from '../../Models/PostModel.js';

export async function CreatePostService(post) {
    try {
        const createdPost = await Post.create(post)

        return createdPost
    } catch (error) {
        return ({ error: 'Error creating post' })
    }
}