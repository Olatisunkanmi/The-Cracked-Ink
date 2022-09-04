const express = require('express');
const CategoryDB = require('../models/Categories');

// Create new category
exports.createCat = async (req, res) => {
	const newCat = new CategoryDB(req.body);
	try {
		let cat = await newCat.save();
		res.status(201).json({
			status: 'success',
			data: {
				cat: cat,
			},
		});
	} catch (error) {
		res.send(400).json({
			status: 'Fail',
			message: error.message,
		});
	}
};

// !Get all categories
exports.getCat = async (req, res) => {
	try {
		const cat = await CategoryDB.find();
		res.status(200).json({
			status: 'success',
			data: {
				cat: cat,
			},
		});
	} catch (error) {
		res.send(400).json({
			status: 'Fail',
			message: error.message,
		});
	}
};
