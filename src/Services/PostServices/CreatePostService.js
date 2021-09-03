import Post from '../../Models/PostModel.js';

export async function CreatePostService(title, text, author) {
    try {
        const createdPost = await Post.create({ title, text, author })

        return createdPost
    } catch (error) {
        return ({ error: 'Error creating post' })
    }
}