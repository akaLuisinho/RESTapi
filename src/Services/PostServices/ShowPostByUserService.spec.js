import { ShowPostByUserService } from './ShowPostByUserService'
import { CreateUserService } from '../UserServices/CreateUserService'
import { CreatePostService } from '../PostServices/CreatePostService'
import Post from '../../Models/PostModel'

const user = {
    name: 'posttest',
    email: 'posttest@gmail.com',
    password: 'posttest'
}


describe('Show Post By User', function () {
    it('sould return posts from an user', async function () {
        const createdUser = await CreateUserService(user.name, user.email, user.password)

        const post = {
            title: 'testpost',
            text: 'post for testing',
            author: createdUser._id
        }

        await CreatePostService(post)
        await CreatePostService(post)

        let postsIdEqualToUserId = true

        const posts = await ShowPostByUserService(user.email)

        posts.postsByUser.forEach(post => post.author != user.id ? postsIdEqualToUserId = false : postsIdEqualToUserId)

        expect(postsIdEqualToUserId).toEqual(true)
    })
})