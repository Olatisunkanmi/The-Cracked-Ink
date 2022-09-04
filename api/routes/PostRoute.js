const router = require('express').Router();
const postController = require('../controllers/PostController');

router
	.route('/')
	.get(postController.getAllPosts)
	.post(postController.createPost);

router
	.route('/junk-posts')
	.get(postController.junkPosts, postController.getAllPosts);

router
	.route('/archives')
	.get(postController.Archives, postController.getAllPosts);

router
	.route('/:id')
	.get(postController.getPost)
	.delete(postController.deletePost)
	.put(postController.updatePost);
module.exports = router;
