import Comment from '../Models/CommentModel.js';
import Post from '../Models/PostModel.js';

async function createComment(req, res) {
    const comment = {
        author: req.user,
        text: req.body.text,
        post: req.params.postId
    }

    try {
        const createdComment = await Comment.create(comment)

        createdComment.save()

        const post = await Post.findById(comment.post)
        await post.comments.push(createdComment)

        post.save()

        return res.status(200).send({ createdComment })
    } catch (error) {
        return res.status(400).send({ error: 'Error creating comment' })
    }

}

async function updateComment(req, res) {
    const { commentId } = req.params
    try {
        const comment = await Comment.findById(commentId)

        if (comment.author == req.user) {
            const newComment = await Comment.findByIdAndUpdate(commentId, { text: req.body.text }, { new: true })

            return res.status(200).send({ newComment })
        }

        return res.status(400).send({ error: 'Not comment author' })
    } catch (error) {
        return res.status(400).send({ error: 'Error updating comment' })
    }
}

async function deleteComment(req, res) {
    const { postId, commentId } = req.params
    try {
        const comment = await Comment.findById(commentId)
        if (comment.author == req.user) {
            await Comment.findByIdAndDelete(commentId)

            const commentedPost = await Post.findById(postId)
            const commentsWhitoutDeleted = commentedPost.comments.filter(comment => comment != commentId)
            commentedPost.comments = commentsWhitoutDeleted
            commentedPost.save()

            return res.status(200).send()
        }
        return res.status(400).send({ error: 'Not comment author' })
    } catch (error) {
        console.log(error);
        return res.status(400).send({ error: 'Error deleting comment' })
    }
}

export default { createComment, updateComment, deleteComment };