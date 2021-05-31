const express = require('express')
const router = express.Router()

const Authenticate = require('./Middlewares/Auth')
const AuthController = require('./Controllers/AuthController')
const CommentController = require('./Controllers/CommentController')

router.post('/register', AuthController.Register)
router.post('/authenticate', AuthController.Authenticate)

router.get('/comments', Authenticate, CommentController.showComments)
router.post('/comments/:id', Authenticate, CommentController.listComments)

router.get('/comment/:id', Authenticate, CommentController.showCommentsByUser)
router.put('/comment/:id', Authenticate, CommentController.updateComment)
router.delete('/comment/:id', Authenticate, CommentController.deleteComment)

module.exports = router