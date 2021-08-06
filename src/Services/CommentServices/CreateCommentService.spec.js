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

describe('CreateComment', () => {
    it('should create a comment', async () => {
        const commentData = {
            author: user.id,
            text: 'comment testing',
            post: post.id
        }

        const comment = await CreateCommentService(commentData)

        expect(comment).toHaveProperty('_id')
        expect(comment.text).toEqual(commentData.text)

        await DeleteCommentService(post.id, comment.id, user.id)
    })

    it('should return post does not exist error', async () => {
        const commentData = {
            author: user.id,
            text: 'comment testing',
            post: 'fakepost'
        }

        const comment = await CreateCommentService(commentData)

        expect(comment).toHaveProperty('error')
        expect(comment).toEqual({ "error": "error creating comment" })

    })
})