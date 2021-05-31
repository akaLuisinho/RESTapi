const express = require('express')
const router = express.Router()

const Authenticate = require('./Middlewares/Auth')
const AuthController = require('./Controllers/AuthController')
const PostController = require('./Controllers/PostController')

router.post('/register', AuthController.Register)
router.post('/authenticate', AuthController.Authenticate)

router.get('/posts', Authenticate, PostController.listPosts)//show all posts

router.get('/posts/:name', Authenticate, PostController.showPostsByUser)//list all posts from an user

router.get('/posts/:id', Authenticate, PostController.showPost)//show one post
router.put('/posts/:id', Authenticate, PostController.updatePost)//edit the  post
router.delete('/posts/:id', Authenticate, PostController.deletePost)//delete the post

module.exports = router