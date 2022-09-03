const router = require('express').Router();
const postController = require('../controllers/PostController');

router
	.route('/')
	.get(postController.getAllPosts)
	.post(postController.createPost);

router
	.route('/:id')
	.get(postController.getPost)
	.delete(postController.deletePost)
	.put(postController.updatePost);
module.exports = router;
