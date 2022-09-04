const router = require('express').Router();
const CategoryController = require('../controllers/CategoryConntroller');

router
	.route('/')
	.get(CategoryController.getCat)
	.post(CategoryController.createCat);

module.exports = router;
