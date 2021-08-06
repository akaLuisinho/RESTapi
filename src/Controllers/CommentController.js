import { CreateCommentService } from '../Services/CommentServices/CreateCommentService.js'
import { UpdateCommentService } from '../Services/CommentServices/UpdateCommentService.js'
import { DeleteCommentService } from '../Services/CommentServices/DeleteCommentService.js'

export async function createComment(req, res) {
    const comment = {
        author: req.user,
        text: req.body.text,
        post: req.params.postId
    }

    const createdComment = await CreateCommentService(comment)

    return res.json(createdComment)
}

export async function updateComment(req, res) {
    const { commentId } = req.params
    const { text } = req.body
    const { user } = req

    const updatedComment = await UpdateCommentService(commentId, text, user)

    return res.send({ updatedComment })
}

export async function deleteComment(req, res) {
    const { postId, commentId } = req.params
    const { user } = req

    const deletedComment = await DeleteCommentService(postId, commentId, user)

    return res.send({ deletedComment })
}