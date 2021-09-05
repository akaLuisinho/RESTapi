import { CreatePostService } from '../Services/PostServices/CreatePostService'
import { UpdatePostService } from '../Services/PostServices/UpdatePostService'
import { ShowPostService } from '../Services/PostServices/ShowPostService'
import { ShowPostByUserService } from '../Services/PostServices/ShowPostByUserService'
import { DeletePostService } from '../Services/PostServices/DeletePostService'
import { CreateUserService } from '../Services/UserServices/CreateUserService'
import User from '../Models/UserModel'

const testUser = await CreateUserService('posttest', 'posttest@example.com', 'posttest')
const testPost = await CreatePostService('test', 'test', testUser.user.id)

describe('Create Post', function () {
    it('it should be able to create a post', async function () {

        const post = {
            title: 'test',
            text: 'test post',
            author: testUser.user.id
        }

        const createdPost = await CreatePostService(post.title, post.text, post.author)

        expect(createdPost).toHaveProperty('_id')
        expect(createdPost.title).toBe('test')
        expect(createdPost.text).toBe('test post')
    })
})

describe('Show Post', function () {
    it('should return a post', async function () {

        const showingPost = await ShowPostService(testPost.id)

        expect(showingPost).toHaveProperty('author');
        expect(showingPost.id).toEqual(testPost.id)
        expect(showingPost.author.id).toEqual(testUser.user.id)
    })
})

describe('Update Post', function () {
    it('should update a post', async function () {
        const updatedPost = await UpdatePostService(testPost.id, 'new title for testing', 'new text for testing')

        expect(updatedPost.id).toBe(testPost.id)
        expect(updatedPost.title).toBe('new title for testing')
        expect(updatedPost.text).toBe('new text for testing')
    })
})

describe('Show Post By User', function () {
    it('sould return posts from an user', async function () {
        const user = await CreateUserService('test', 'test', 'test')

        await CreatePostService('test', 'test', user.user.id)
        await CreatePostService('test', 'test', user.user.id)

        const posts = await ShowPostByUserService(user.user.email)

        let postsIdEqualToUserId = true

        posts.forEach(post => post.author != user.user.id ? postsIdEqualToUserId = false : postsIdEqualToUserId)

        expect(postsIdEqualToUserId).toEqual(true)
    })
})

describe('Delete Post', function () {
    it('it should be able to delete a post', async function () {

        const post = {
            title: 'test',
            text: 'test post',
            author: testUser.user.id
        }

        const createdPost = await CreatePostService(post)

        const deletedPost = await DeletePostService(createdPost.id)

        expect(deletedPost).toBeUndefined()
    })
})

afterAll(async () => {
    await User.deleteMany()
})