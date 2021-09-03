import { CreatePostService } from './CreatePostService'
import { CreateUserService } from '../UserServices/CreateUserService'

const user = {
    name: 'createposttest',
    email: 'createposttest@gmail.com',
    password: 'createposttest'
}

describe('Create Post', function () {
    it('it should be able to create a post', async function () {
        const createdUser = await CreateUserService(user.name, user.email, user.password)

        const post = {
            title: 'test',
            text: 'test post',
            author: createdUser.user.id
        }

        const createdPost = await CreatePostService(post)

        expect(createdPost).toHaveProperty('_id')
        expect(createdPost.title).toBe('test')
        expect(createdPost.text).toBe('test post')
    })
})