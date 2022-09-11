const app = require('./index');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
var cors = require('cors');
app.use(cors());

dotenv.config();

const port = process.env.PORT || 3500;

mongoose
	.connect(process.env.MONGO_URL, {})
	.then(console.log('Connected to MongoDB'))
	.catch((err) => console.log(err));
app.listen(port, () => {
	console.log(`Node is listening on Port ${port}`);
});
