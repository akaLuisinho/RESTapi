import { CreatePostService } from './CreatePostService'
import { DeletePostService } from './DeletePostService'

const user = {
    id: '610dc918052505a4b8e1fdbb'
}

describe('Create Post', function () {
    it('it should be able to create a post', async function () {

        const post = {
            title: 'test',
            text: 'test post',
            author: user.id
        }

        const createdPost = await CreatePostService(post)

        expect(createdPost).toHaveProperty('_id')
        expect(createdPost.title).toBe('test')
        expect(createdPost.text).toBe('test post')

        await DeletePostService(createdPost.id)
    })
})