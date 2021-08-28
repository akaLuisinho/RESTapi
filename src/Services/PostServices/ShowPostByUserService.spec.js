import { ShowPostByUserService } from './ShowPostByUserService'

const user = {
    id: '610dc918052505a4b8e1fdbb',
    name: 'luis',
    email: 'luis@gmail.com'
}

describe('Show Post By User', function () {
    it('sould return posts from an user', async function () {
        let postsIdEqualToUserId = true

        const posts = await ShowPostByUserService(user.email)

        posts.postsByUser.forEach(post => post.author != user.id ? postsIdEqualToUserId = false : postsIdEqualToUserId)

        expect(postsIdEqualToUserId).toEqual(true)
    })
})