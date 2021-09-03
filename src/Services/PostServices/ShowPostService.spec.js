import { CreatePostService } from './CreatePostService'
import { ShowPostService } from './ShowPostService'
import { CreateUserService } from '../UserServices/CreateUserService'

const user = {
    name: 'updateposttest',
    email: 'updatepost@test.com',
    password: 'updateposttest'
}

describe('Show Post', function () {
    it('should return a post', async function () {
        const createdUser = await CreateUserService(user.name, user.email, user.password)

        const post = {
            title: 'test showing one post',
            text: 'post for test',
        }

        const createdPost = await CreatePostService(post.title, post.text, createdUser.user.id)

        const showingPost = await ShowPostService(createdPost.id)

        expect(showingPost).toHaveProperty('author');
        expect(showingPost.id).toEqual(createdPost.id)
        expect(showingPost.author.id).toEqual(createdUser.user.id)
    })
})