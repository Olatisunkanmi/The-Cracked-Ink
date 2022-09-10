const router = require('express').Router();
const postController = require('../controllers/PostController');

router
	.route('/')
	.get(postController.getAllPosts)
	.post(postController.createPost);

router
	.route('/main')
	.get(postController.Main, postController.getAllPosts);

router
	.route('/poems')
	.get(postController.Poems, postController.getAllPosts);

router.route('/junk').get(postController.Archives);

router
	.route('/:id')
	.get(postController.getPost)
	.delete(postController.deletePost)
	.put(postController.updatePost);
module.exports = router;
