import { CreatePostService } from './CreatePostService.js'
import { UpdatePostService } from './UpdatePostService.js'
import { CreateUserService } from '../UserServices/CreateUserService.js'

const user = {
    name: 'updateposttest',
    email: 'updateposttest@gmail.com',
    password: 'updateposttest'
}

describe('Update Post', function () {
    it('should update a post', async function () {
        const createdUser = await CreateUserService(user.name, user.email, user.password)

        const post = {
            title: "teste",
            text: "just testing",
            author: createdUser._id
        }

        const createdPost = await CreatePostService(post)

        const updatedPost = await UpdatePostService(createdPost.id, 'new title for testing', 'new text for testing')

        expect(updatedPost.title).toBe('new title for testing')
        expect(updatedPost.text).toBe('new text for testing')

    })
})