
import { ShowPostService } from './ShowPostService'

const post = {
    id: '610dc931052505a4b8e1fdbc',
    title: 'teste',
    text: 'just testing',
    author: {
        id: '610dc918052505a4b8e1fdbb'
    }
}

describe('Show Post', function () {
    it('should return a post', async function () {
        const showingPost = await ShowPostService(post.id)

        expect(showingPost.post).toHaveProperty('author');
        expect(showingPost.post.id).toEqual('610dc931052505a4b8e1fdbc')
        expect(showingPost.post.author.id).toEqual('610dc918052505a4b8e1fdbb')
    })
})