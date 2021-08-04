import { Router } from 'express';
const router = Router()

import Authenticate from './Middlewares/Auth.js';
import AuthController from './Controllers/AuthController.js';
import PostController from './Controllers/PostController.js';
import CommentController from './Controllers/CommentController.js';

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

export { router };