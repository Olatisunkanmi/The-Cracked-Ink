const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');

// Sort by cat
exports.junkPosts = async (req, res, next) => {
	// set cat we want to fetch
	req.query.categories = 'junk';
	req.query.sort = 'createdAt';
	next();
};

// !CREATE POST
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

		let query = await Post.find(queryObj);

		// Sort other
		if (req.query.sort) {
			// query = query.sort()
		}

		let Posts = await query;

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

exports.Archives = async (req, res) => {
	try {
		const month = req.params.id * 1;
		console.log(typeof month);

		const Time = await Post.aggregate([
			{
				$sort: { date: -1, item: 1 },
			},

			// group by month and freq of tours !
			{
				$group: {
					_id: {
						day: { $dayOfYear: '$createdAt' },
						year: { $year: '$date' },
					},
					Posts: {
						$push: {
							title: '$title',
							desc: '$desc',
						},
					},
				},
			},
		]);
		res.status(200).json({
			status: 'success',
			result: Time.length,
			data: {
				Dates: Time,
			},
		});
	} catch (error) {
		res.status(404).json({
			status: 'Fail',
			message: error.message,
		});
	}
};
