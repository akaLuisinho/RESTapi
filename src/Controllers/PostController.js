import Post from '../Models/PostModel.js';

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


async function showPost(req, res) {
    try {
        const post = await Post.findById(req.params.postId).populate('author').populate('comments')

        return res.send({ post })
    } catch (error) {
        return res.status(400).send({ error: 'Error loading post' })
    }

}

async function showPostsByUser(req, res) {
    try {
        const postsFromUser = await User.findOne({ email: req.params.email })

        return res.send({ postsFromUser })
    } catch (error) {
        return res.status(400).send({ error: 'Error loading posts from this user' })
    }

}

async function updatePost(req, res) {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.postId, {
            title: req.body.title,
            text: req.body.text,
        }, { new: true })

        return res.send({ updatedPost })
    } catch (error) {
        return res.status(400).send({ error: 'Error updating post' })
    }

}

async function deletePost(req, res) {
    try {
        await Post.findByIdAndDelete(req.params.postId)

        return res.send()
    } catch (error) {
        return res.status(400).send({ error: 'Error deleting post' })
    }

}



export default { createPost, listPosts, showPostsByUser, showPost, updatePost, deletePost };