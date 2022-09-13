const Users = require('../models/User');

exports.authUser = async (req, res, next) => {
	let UserId;
	try {
		UserId = await Users.findOne({
			username: req.body.username,
		});
	} catch (error) {
		res.status(400).json({
			status: 'Fail',
			message: error,
		});
	}
	req.username = UserId;
	next();
};
