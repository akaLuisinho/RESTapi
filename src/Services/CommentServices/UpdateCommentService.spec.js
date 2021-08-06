import { CreateCommentService } from "./CreateCommentService"
import { UpdateCommentService } from "./UpdateCommentService"
import { DeleteCommentService } from "./DeleteCommentService"

const user = {
    id: "610dc918052505a4b8e1fdbb",
    name: "luis",
    email: "luis@gmail.com",
    password: "1234"
}

const post = {
    id: '610dc931052505a4b8e1fdbc'
}

describe('UpdateComment', () => {
    it('should update the comment', async () => {
        const commentData = {
            author: user.id,
            text: 'comment testing',
            post: post.id
        }

        const updateComment = {
            text: 'update testing',
        }

        const createdComment = await CreateCommentService(commentData)

        expect(createdComment).toHaveProperty('_id')
        expect(createdComment.text).toEqual(commentData.text)

        const updatedComment = await UpdateCommentService(createdComment.id, updateComment.text, commentData.author)

        expect(updatedComment.text).toEqual(updateComment.text)

        await DeleteCommentService(post.id, createdComment.id, user.id)
    })

    it('should return error updating comment', async () => {
        const commentData = {
            author: user.id,
            text: 'comment testing',
            post: post.id
        }
        const updateComment = {
            text: 'update testing',
        }

        const fakeComment = 'non existant id'

        const createdComment = await CreateCommentService(commentData)

        expect(createdComment).toHaveProperty('_id')
        expect(createdComment.text).toEqual(commentData.text)

        const updatedComment = await UpdateCommentService(fakeComment, updateComment.text, commentData.author)

        expect(updatedComment).toHaveProperty('error')
        expect(updatedComment).toEqual({ "error": "error updating comment" })

        await DeleteCommentService(post.id, createdComment.id, user.id)
    })
})