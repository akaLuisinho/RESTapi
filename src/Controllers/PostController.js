const Post = require('../Models/PostModel')

async function createPost(req, res) {

    const post = {
        title: req.body.title,
        text: req.body.text,
        author: req.user
    }

    try {
        const createdPost = await Post.create(post)

        return res.send({ createdPost })
    } catch (error) {
        return res.status(400).send({ error: 'Error creating post' })
    }
}

async function listPosts(req, res) {
    try {
        const posts = await Post.find().populate('author')

        return res.send({ posts })
    } catch (error) {
        return res.status(400).send({ error: 'Error loading posts' })
    }
}

async function showPostsByUser(req, res) {
    const postsFromUser = await Post.findOne({ user_id: req.id })

    return res.send({ postsFromUser })
}

async function showPost(req, res) {
    const post = await Post.findById(req.params.id).populate('author')

    return res.send({ post })
}


async function updatePost(req, res) {
    const updatedPost = await Post.updateById({ post_id: req.params.id }, {
        title: req.body.title,
        text: req.body.text,
    })

    return res.send({ updatedPost })
}

async function deletePost(req, res) {
    const Post = await Post.findOneAndDelete({ post_id: req.body.id })

    return res.send({ Post })
}



module.exports = { createPost, listPosts, showPostsByUser, showPost, updatePost, deletePost }