import { Router } from 'express';
const router = Router()

import { Authenticate } from './Middlewares/Auth.js';
import { register, login } from './Controllers/UserController.js';
import { createPost, listPosts, showPostsByUser, showPost, updatePost, deletePost } from './Controllers/PostController.js';
import { createComment, updateComment, deleteComment } from './Controllers/CommentController.js';

router.post('/register', register)//register a new user
router.post('/login', login)//authenticate a created user

router.post('/posts', Authenticate, createPost)//create a post
router.get('/posts', Authenticate, listPosts)//show all posts

router.get('/posts/:email', Authenticate, showPostsByUser)//list all posts from an user

router.get('/post/:postId', Authenticate, showPost)//show one post
router.put('/post/:postId', Authenticate, updatePost)//edit the post
router.delete('/post/:postId', Authenticate, deletePost)//delete the post

router.post('/post/:postId/comment', Authenticate, createComment)//create a comment
router.put('/post/:postId/comment/:commentId', Authenticate, updateComment)//edit the comment
router.delete('/post/:postId/comment/:commentId', Authenticate, deleteComment)//delete the comment

export { router };