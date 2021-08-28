import { expect } from '@jest/globals'
import { CreatePostService } from './CreatePostService'
import { DeletePostService } from './DeletePostService'
import { UpdatePostService } from './UpdatePostService.js'

const post = {
    title: "teste",
    text: "just testing",
    author: '610dc918052505a4b8e1fdbb'
}

describe('Update Post', function () {
    it('should update a comment', async function () {
        const createdPost = await CreatePostService(post)

        const updatedPost = await UpdatePostService(createdPost.id, 'new title for testing', 'new text for testing')

        expect(updatedPost.updatedPost.title).toBe('new title for testing')
        expect(updatedPost.updatedPost.text).toBe('new text for testing')

        await DeletePostService(createdPost.id)
    })
})