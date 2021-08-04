import { CreatePostService } from '../Services/PostServices/CreatePostService.js'
import { ListPostService } from '../Services/PostServices/ListPostService.js'
import { ShowPostService } from '../Services/PostServices/ShowPostService.js'
import { ShowPostByUserService } from '../Services/PostServices/ShowPostByUserService.js'
import { UpdatePostService } from '../Services/PostServices/UpdatePostService.js'
import { DeletePostService } from '../Services/PostServices/DeletePostService.js'

async function createPost(req, res) {
    const post = {
        title: req.body.title,
        text: req.body.text,
        author: req.user
    }

    const createdPost = await CreatePostService(post)

    return res.send({ createdPost })
}

async function listPosts(req, res) {
    const posts = await ListPostService()

    return res.send({ posts })
}

async function showPost(req, res) {
    const { postId } = req.params

    const post = await ShowPostService(postId)

    return res.send({ post })
}

async function showPostsByUser(req, res) {
    const { email } = req.params

    const postsByUser = await ShowPostByUserService(email)

    return res.send({ postsByUser })
}

async function updatePost(req, res) {
    const postId = req.params.postId
    const { title, text } = req.body

    const updatedPost = await UpdatePostService(postId, title, text)

    return res.send({ updatedPost })
}

async function deletePost(req, res) {
    const { postId } = req.params

    const deletedPost = await DeletePostService(postId)

    return res.send({ deletedPost })
}



export default { createPost, listPosts, showPostsByUser, showPost, updatePost, deletePost };