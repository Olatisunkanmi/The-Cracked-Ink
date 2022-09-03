const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');

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

//  ! get a post
exports.getAllPosts = async (req, res) => {
	try {
		let Posts = await Post.find();
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
	} catch (err) {
		res.status(500).json({
			status: 'Fail',
			message: err,
		});
	}
};
