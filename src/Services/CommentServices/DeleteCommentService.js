import Comment from '../../Models/CommentModel.js';
import Post from '../../Models/PostModel.js';

export async function DeleteCommentService(postId, commentId, user) {
    try {
        const comment = await Comment.findById(commentId)
        if (comment.author == user) {
            await Comment.findByIdAndDelete(commentId)
            const commentedPost = await Post.findById(postId)

            const commentsWhitoutDeleted = commentedPost.comments.filter(comment => comment != commentId)
            commentedPost.comments = commentsWhitoutDeleted
            commentedPost.save()

            await Comment.delete()
            return
        }
        return ({ "error": "not comment author" })
    } catch (error) {
        return ({ "error": "error deleting comment" })
    }
}