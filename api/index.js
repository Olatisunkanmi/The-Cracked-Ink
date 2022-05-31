const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { response } = require('express');
const authRoute = require("./routes/auth");
const app = express();

dotenv.config();
app.use(express.json());

// Connect to mongodb in the .env files.

mongoose.connect('mongodb+srv://Admin:admin@cluster0.yiiq925.mongodb.net/?retryWrites=true&w=majority', {
    
        useNewUrlParser: true,
        useUnifiedTopology: true
      

})
.then(response, () => {console.log('Mongo Works')})
.catch(err =>  console.log(`Not working ${err}`) )

app.use("/user/auth", authRoute);

app.listen("5000", () => {
    console.log('Node is listening ');
})