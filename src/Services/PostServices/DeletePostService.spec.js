import { CreatePostService } from './CreatePostService'
import { DeletePostService } from './DeletePostService'

const user = {
    id: '610dc918052505a4b8e1fdbb'
}

describe('Delete Post', function () {
    it('it should be able to delete a post', async function () {

        const post = {
            title: 'test',
            text: 'test post',
            author: user.id
        }

        const createdPost = await CreatePostService(post)

        const deletedPost = await DeletePostService(createdPost.id)

        expect(deletedPost).toBeUndefined()
    })
})