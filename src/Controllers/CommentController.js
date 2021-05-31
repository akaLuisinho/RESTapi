const Comment = require('../Models/CommentModel')

async function showComments(req, res) {
    const comment = await Comment.find()

    return res.send({ comment })
}

async function showCommentsByUser(req, res) {
    const comment = await Comment.find()

    return res.send({ comment })
}

async function updateComment(req, res) {
    const comment = await Comment.find()

    return res.send({ comment })
}

async function deleteComment(req, res) {
    const comment = await Comment.find()

    return res.send({ comment })
}



module.exports = { showComments, showCommentsByUser, updateComment, deleteComment }