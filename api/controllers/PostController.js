const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');

// Sort by cat
exports.Poems = async (req, res, next) => {
	req.query.categories = 'Poems';
	next();
};
exports.Main = async (req, res, next) => {
	req.query.categories = 'main';
	next();
};

// !CREATE POSTrs
exports.createPost = async (req, res) => {
	let UserId = req.username;
	console.log(UserId);

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
					_id: { $dayOfYear: '$createdAt' },
					type: 'title',
				},
				// {
				// 	$group: {
				// 		_id: { $dayOfYear: '$createdAt' },
				// 	},
				// },
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

exports.getComments = async (req, res) => {
	const { id } = req.params;
	try {
		const post = await Post.findById(id);
		res.status(200).json({
			status: 'sucess',
			data: post.comments,
		});
	} catch (error) {
		res.status(400).json({
			status: 'Fail',
			message: 'error',
		});
	}
};

exports.commentPost = async (req, res) => {
	const { id } = req.params;
	const { comment } = req.body;

	try {
		const post = await Post.findById(id);
		post.comments.push(comment);
		await post.save();
		res.status(200).json({
			status: 'sucess',
			data: {
				Comments: post.comments,
			},
		});
	} catch (error) {
		res.status(400).json({
			status: 'Fail',
			message: 'error',
		});
	}
};
