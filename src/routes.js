const express = require('express')
const router = express.Router()

const Authenticate = require('./Middlewares/Auth')
const AuthController = require('./Controllers/AuthController')
const PostController = require('./Controllers/PostController')

router.post('/register', AuthController.Register)
router.post('/authenticate', AuthController.Authenticate)

router.post('/posts', Authenticate, PostController.createPost)
router.get('/posts', Authenticate, PostController.listPosts)//show all posts

router.get('/posts/email', Authenticate, PostController.showPostsByUser)//list all posts from an user

router.get('/post/:id', Authenticate, PostController.showPost)//show one post
router.put('/post/:id', Authenticate, PostController.updatePost)//edit the  post
router.delete('/post/:id', Authenticate, PostController.deletePost)//delete the post

module.exports = router