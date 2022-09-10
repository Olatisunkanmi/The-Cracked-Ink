const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');

// Sort by cat
exports.Poems = async (req, res, next) => {
	req.query.categories = 'Poems';
	// req.query.sort = 'Poems';
	next();
};
exports.Main = async (req, res, next) => {
	req.query.categories = 'main';
	// req.query.sort = 'Poems';
	next();
};

// !CREATE POSTrs
exports.createPost = async (req, res) => {
	const newPost = new Post(req.body);
	try {
		const Posts = await newPost.save();
		res.status(200).json({
			status: 'sucess',
			result: Posts.length,
			data: {
				Posts: Posts,
			},
		});
	} catch (error) {
		res.status(400).json({
			status: 'Fail',
			message: error,
		});
	}
};

//  ! get aALL post
exports.getAllPosts = async (req, res) => {
	try {
		let queryObj = { ...req.query };
		console.log(queryObj);

		// ? In cases where there are multiple queries.
		// let queryStr = JSON.stringify(queryObj);
		// queryStr = JSON.parse(queryStr);
		query = await Post.find(queryObj);
		// Sort other
		if (req.query.sort) {
			query = query.sort();
		}

		let Posts = await query;

		res.status(200).json({
			status: 'sucess',
			result: Posts.length,
			data: Posts,
		});
	} catch (error) {
		res.status(400).json({
			status: 'Fail',
			message: error.message,
		});
	}
};

// !                DELETE POST
exports.deletePost = async (req, res) => {
	try {
		const post = await Post.findByIdAndDelete(req.params.id);
		res.status(200).json({
			status: 'sucess',
			data: {
				Posts: null,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'Fail',
			message: err,
		});
	}
};

// !get A post
exports.getPost = async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		res.status(200).json({
			status: 'sucess',
			result: post.length,
			data: {
				Posts: post,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'Fail',
			message: err,
		});
	}
};

//!         UPDATE POST
exports.updatePost = async (req, res) => {
	try {
		const updatedPost = await Post.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true },
		);
		res.status(200).json({
			status: 'sucess',
			result: updatedPost.length,
			data: {
				Posts: updatedPost,
			},
		});
	} catch (error) {
		res.status(500).json({
			status: 'Fail',
			message: error.message,
		});
	}
};

// ! ARchives
exports.Archives = async (req, res) => {
	try {
		// let posts = req.posts
		let posts = await Post.aggregate([
			// group by month and freq of tours !
			{
				$match: { categories: 'junk' },
			},
			{
				$group: {
					_id: { $year: '$createdAt' },
					// _id: {
					// 	day: { $dayOfYear: '$createdAt' },
					// 	year: { $year: '$createdAt' },
					// },
					Posts: {
						$push: {
							title: '$title',
							desc: '$desc',
							_id: '$_id',
							username: '$username',
							comments: '$comments',
							createdAt: '$createdAt',
							photo: '$photo',
							categories: '$categories',
						},
					},
				},
			},

			{ $sort: { _id: 1 } },
		]);
		res.status(200).json({
			status: 'success',
			result: posts.length,
			data: posts,
		});
	} catch (error) {
		res.status(404).json({
			status: 'Fail',
			message: error.message,
		});
	}
};
