const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const USERROUTE = require('./routes/Users');
const POSTROUTE = require('./routes/PostRoute');
const AUTH = require('./routes/auth');
const app = express();
app.use(express.json());
app.use(cors('*'));

app.use(morgan('common'));
app.use('/images', express.static(path.join(__dirname, '/images')));

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'images');
	},
	filename: (req, file, cb) => {
		cb(null, req.body.name);
	},
});

const upload = multer({ storage: storage });
app.post('/api/v2/upload', upload.single('file'), (req, res) => {
	res.status(200).json('File has been uploaded');
});

app.use('/api/v2/posts', POSTROUTE);
app.use('/api/v2/users', USERROUTE);
app.use('/api/v2/auth', AUTH);

module.exports = app;
