const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { response } = require('express');
const AUTHROUTE = require("./routes/auth");
const USERLOGIN = require("./routes/users");
const app = express();

dotenv.config();
app.use(express.json());

// Connect to mongodb in the .env files.
const t1 = new Date();

const before =  Date.now;
const main = async () => {
  await mongoose.connect(process.env.MONGO_URL)
  .then(console.log('Mongo'))


}
main() .catch(err => console.log(err));
const t2 = new Date();
console.log(`${t2-t1} MSecs`);



// .then(response, () => {console.log('Mongo Works')})
// .catch(err =>  console.log(`Not working ${err}`) )

// Creating all users Routes 

app.use("/user/auth", AUTHROUTE); 
app.use("/user/login", USERLOGIN); 

app.listen("5000", () => {
    console.log('Node is listening ');
})