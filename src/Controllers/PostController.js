const Post = require('../Models/PostModel')

async function listPosts(req, res) {
    const posts = await Post.find()

    return res.send({ Post })
}

async function showPostsByUser(req, res) {
    const postsFromUser = await Post.findOne({ user_id: req.id })

    return res.send({ postsFromUser })
}

async function showPost(req, res) {
    const post = await Post.findOne({ post_id: req.header.id })

    return res.send({ post })
}


async function updatePost(req, res) {
    const updatedPost = await Post.updateOne({ post_id: req.header.id }, {
        title: req.body.title,
        text: req.body.text,
    })

    return res.send({ updatedPost })
}

async function deletePost(req, res) {
    const Post = await Post.findOneAndDelete({ post_id: req.body.id })

    return res.send({ Post })
}



module.exports = { listPosts, showPostsByUser, showPost, updatePost, deletePost }