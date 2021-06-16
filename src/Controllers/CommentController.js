const Comment = require('../Models/CommentModel')
const Post = require('../Models/PostModel')

async function createComment(req, res) {
    const comment = {
        author: req.user,
        text: req.body.text,
        post: req.params.id
    }

    try {
        const createdComment = await Comment.create(comment)

        createdComment.save()

        const post = await Post.findById(comment.post)
        await post.comments.push(createdComment._id)

        post.save()

        return res.status(200).send({ createdComment })
    } catch (error) {
        return res.status(400).send({ error: 'Error creating comment' })
    }

}

function updateComment(req, res) {

}

function deleteComment(req, res) {

}

module.exports = { createComment, updateComment, deleteComment }