import Comment from '../../Models/CommentModel.js';
import Post from '../../Models/PostModel.js';

export async function CreateCommentService(comment) {
    try {
        const createdComment = await Comment.create(comment)

        createdComment.save()

        const post = await Post.findById(comment.post)
        await post.comments.push(createdComment)

        post.save()

        return ({ createdComment })
    } catch (error) {
        return ({ error: 'Error creating comment' })
    }
}