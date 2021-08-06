import Comment from '../../Models/CommentModel.js';

export async function UpdateCommentService(commentId, text, user) {
    try {
        const comment = await Comment.findById(commentId)

        if (comment.author == user) {
            const newComment = await Comment.findByIdAndUpdate(commentId, { text }, { new: true })

            return newComment
        }

        return ({ "error": "not comment author" })
    } catch (error) {
        return ({ "error": "error updating comment" })
    }
}