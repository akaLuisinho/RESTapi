import { CreateCommentService } from "./CreateCommentService"
import { DeleteCommentService } from "./DeleteCommentService"

const user = {
    id: '610beb8b28b8379574ef8171',
    name: 'commenttest',
    email: 'commenttest@example.com.br',
    password: 'testpassword'
}

const post = {
    id: '610bec4e64a464964a423587'
}

describe('CreateComment', () => {
    it('should create a comment', async () => {
        const commentData = {
            author: user.id,
            text: 'comment test',
            post: post.id
        }

        const comment = await CreateCommentService(commentData)

        expect(comment).toHaveProperty('_id')
        expect(comment.text).toEqual(commentData.text)

        await DeleteCommentService(commentData)
    })
})