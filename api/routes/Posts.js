const express = require('express');
const UserDB = require('../models/User');
const PostDB = require('../models/Post');
const User = require('../models/User');

const router = express.Router();


// Create Post 
// we use this method when we edit existing data in our database.

router.post("/create", async (req, res ) => {
    console.log(req.body)

    // creating a new Post from the POST DB 

    try {
        console.log(req.body)


            const newPost = new PostDB({
                title : req.body.title,
                desc : req.body.desc,
                cat : req.body.categories
            })

            await newPost.save();
            res.status(200).json(newPost);
            console.log('Post Created');

    } catch (error) {
            res.status(401).json(error)
    }   
            
})



// delete an existing user 


module.exports = router;