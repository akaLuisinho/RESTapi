import { CreateCommentService } from '../Services/CommentServices/CreateCommentService'
import { CreateUserService } from '../Services/UserServices/CreateUserService'
import { CreatePostService } from '../Services/PostServices/CreatePostService'
import { UpdateCommentService } from '../Services/CommentServices/UpdateCommentService'
import { DeleteCommentService } from '../Services/CommentServices/DeleteCommentService'
import Comment from '../Models/CommentModel'
import Post from '../Models/PostModel'

const testUser = await CreateUserService('commenttest', 'commenttest@example.com', 'commenttset')
const testPost = await CreatePostService('test', 'test', testUser.user.id)

describe('Create Comment', () => {
    it('should create a comment', async () => {
        const createdComment = await CreateCommentService(testUser.user.id, 'test comment', testPost.id)

        expect(createdComment).toHaveProperty('_id')
        expect(createdComment.text).toEqual('test comment')
    })
})

describe('Update Comment', () => {
    it('should update a comment', async () => {
        const createdComment = await CreateCommentService(testUser.user.id, 'test comment', testPost.id)

        expect(createdComment).toHaveProperty('_id')
        expect(createdComment.text).toEqual('test comment')

        const updatedComment = await UpdateCommentService(createdComment.id, 'update comment test', testUser.user.id)

        expect(updatedComment.text).toEqual('update comment test')
    })

    it('should return not comment author error', async () => {
        const createdComment = await CreateCommentService(testUser.user.id, 'test comment', testPost.id)

        expect(createdComment).toHaveProperty('_id')
        expect(createdComment.text).toEqual('test comment')

        const updatedComment = await UpdateCommentService(createdComment.id, 'update comment test', 'not user id')

        expect(updatedComment).toHaveProperty('error')
        expect(updatedComment).toEqual({ "error": "not comment author" })
    })
})

describe('Delete Comment', () => {
    it('should delete a comment', async () => {
        const createdComment = await CreateCommentService(testUser.user.id, 'test comment', testPost.id)

        expect(createdComment).toHaveProperty('_id')
        expect(createdComment.text).toEqual('test comment')
        const deletedComment = await DeleteCommentService(testPost.id, createdComment.id, testUser.user.id)

        expect(deletedComment).toBeUndefined()
    })
})

afterAll(async () => {
    await Comment.deleteMany()
})