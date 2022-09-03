const express = require('express');
const app = express();
const morgan = require('morgan');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/Users');
const POSTROUTE = require('./routes/PostRoute');
const categoryRoute = require('./routes/Categories');
const multer = require('multer');
const path = require('path');

app.use(express.json());
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
app.post('/api/upload', upload.single('file'), (req, res) => {
	res.status(200).json('File has been uploaded');
});

app.use('/api/v2/posts', POSTROUTE);

module.exports = app;
