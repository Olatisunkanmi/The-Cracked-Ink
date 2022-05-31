const express = require('express');
const User = require('../models/User');
const router = express.Router();


// Register
// This is how to create a new user and connecting our databse and creating a new user.
// .post
// we use this method when we creat. 


// Register a new user
router.post("/register", async (req, res) => {

    
    
    try{
        console.log(req.body);
        const newUser = new User ({
            
            username : req.body.username,
            email : req.body.email,
            password : req.body.password

         
        });


        await newUser.save();
        res.status(200).json(newUser);
        console.log('User Created ')


    } catch (err){
        res.status(500).json(err);
        console.log(err)
     }

});

module.exports = router;