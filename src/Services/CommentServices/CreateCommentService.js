import Comment from '../../Models/CommentModel.js';
import Post from '../../Models/PostModel.js';

export async function CreateCommentService(author, text, post) {
    try {
        const createdComment = await Comment.create({ author, text, post })

        createdComment.save()

        const commentedPost = await Post.findById(post)

        await commentedPost.comments.push(createdComment)

        commentedPost.save()

        return createdComment
    } catch (error) {
        console.log(error);
        return ({ "error": "error creating comment" })
    }
}