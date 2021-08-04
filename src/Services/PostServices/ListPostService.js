import Post from '../../Models/PostModel.js';

export async function ListPostService(req, res) {
    try {
        const posts = await Post.find().populate('author')

        return ({ posts })
    } catch (error) {
        console.log(error);
        return ({ error: 'Error loading posts' })
    }
}