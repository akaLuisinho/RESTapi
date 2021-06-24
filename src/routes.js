const express = require('express')
const router = express.Router()

const Authenticate = require('./Middlewares/Auth')
const AuthController = require('./Controllers/AuthController')
const PostController = require('./Controllers/PostController')
const CommentController = require('./Controllers/CommentController')

router.post('/register', AuthController.Register)
router.post('/authenticate', AuthController.Authenticate)

router.post('/posts', Authenticate, PostController.createPost)
router.get('/posts', Authenticate, PostController.listPosts)//show all posts

router.get('/posts/:email', Authenticate, PostController.showPostsByUser)//list all posts from an user

router.get('/post/:postId', Authenticate, PostController.showPost)//show one post
router.put('/post/:postId', Authenticate, PostController.updatePost)//edit the post
router.delete('/post/:postId', Authenticate, PostController.deletePost)//delete the post

router.post('/post/:postId/comment', Authenticate, CommentController.createComment)//create a comment
router.put('/post/:postId/comment/:commentId', Authenticate, CommentController.updateComment)//edit the comment
router.delete('/post/:postId/comment/:commentId', Authenticate, CommentController.deleteComment)//delete the comment

module.exports = router