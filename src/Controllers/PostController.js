import { CreatePostService } from '../Services/PostServices/CreatePostService.js'
import { ListPostService } from '../Services/PostServices/ListPostService.js'
import { ShowPostService } from '../Services/PostServices/ShowPostService.js'
import { ShowPostByUserService } from '../Services/PostServices/ShowPostByUserService.js'
import { UpdatePostService } from '../Services/PostServices/UpdatePostService.js'
import { DeletePostService } from '../Services/PostServices/DeletePostService.js'

export async function createPost(req, res) {
    const post = {
        title: req.body.title,
        text: req.body.text,
        author: req.user
    }

    const createdPost = await CreatePostService(post)

    return res.json(createdPost)
}

export async function listPosts(req, res) {
    const posts = await ListPostService()

    return res.send({ posts })
}

export async function showPost(req, res) {
    const { postId } = req.params

    const post = await ShowPostService(postId)

    return res.send({ post })
}

export async function showPostsByUser(req, res) {
    const { email } = req.params

    const postsByUser = await ShowPostByUserService(email)

    return res.send({ postsByUser })
}

export async function updatePost(req, res) {
    const postId = req.params.postId
    const { title, text } = req.body

    const updatedPost = await UpdatePostService(postId, title, text)

    return res.send({ updatedPost })
}

export async function deletePost(req, res) {
    const { postId } = req.params

    const deletedPost = await DeletePostService(postId)

    return res.send({ deletedPost })
}