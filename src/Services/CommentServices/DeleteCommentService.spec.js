import { CreateCommentService } from "./CreateCommentService"
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

describe('DeleteCommentService', () => {
    it('should delete a comment', async () => {
        const commentData = {
            author: user.id,
            text: 'comment testing',
            post: post.id
        }

        const createdComment = await CreateCommentService(commentData)

        expect(createdComment).toHaveProperty('_id')
        expect(createdComment.text).toEqual(commentData.text)

        const deletedComment = await DeleteCommentService(post.id, createdComment.id, user.id)

        expect(deletedComment).toBeUndefined()
    })

    it('should return not comment author error', async () => {
        const commentData = {
            author: user.id,
            text: 'comment testing',
            post: post.id
        }
        const fakeUser = 'non existant id'

        const createdComment = await CreateCommentService(commentData)

        expect(createdComment).toHaveProperty('_id')
        expect(createdComment.text).toEqual(commentData.text)

        const deletedComment = await DeleteCommentService(post.id, createdComment.id, fakeUser)

        expect(deletedComment).toHaveProperty('error')
        expect(deletedComment).toEqual({ "error": "not comment author" })

        await DeleteCommentService(post.id, createdComment.id, user.id)
    })

    it('should return error deleting comment error', async () => {
        const commentData = {
            author: user.id,
            text: 'comment testing',
            post: post.id
        }
        const fakeComment = 'non existant id'

        const createdComment = await CreateCommentService(commentData)

        expect(createdComment).toHaveProperty('_id')
        expect(createdComment.text).toEqual(commentData.text)

        const deletedComment = await DeleteCommentService(post.id, fakeComment, user.id)

        expect(deletedComment).toHaveProperty('error')
        expect(deletedComment).toEqual({ "error": "error deleting comment" })

        await DeleteCommentService(post.id, createdComment.id, user.id)
    })
})