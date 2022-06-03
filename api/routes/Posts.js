const express = require('express');
const UserDB = require('../models/User');
const PostDB = require('../models/Post');
const User = require('../models/User');
const Post = require('../models/Post');

const router = express.Router();




// Create Post 
// we use this method when we edit existing data in our database.

router.post("/", async (req, res ) => { 
    // console.log(req.body)
                                // creating a new Post from the POST DB 
                                const newPost = new PostDB (req.body)
                                try {
                                        await newPost.save();
                                        res.status(201).json(newPost);
                                        console.log('Post Created');

                                } catch (error) {
                                        res.status(401).json(error)
                                }   
        
                          
    // } catch (error) {
    //     res.status(500).json(error)
    //     console.log('err 3');
    // }


   
            
})

// Update and Edit a Post 

router.put('/:id', async (req, res ) => {

    // send an edit post req.

    try {
        const post = await PostDB.findById(req.params.id);

        // if username 
        if(post.username === req.body.username){
            try {
                const updatedPost = await PostDB.findByIdAndUpdate((req.params.id), {
            
                    // "$set: req.body"
                    // this is How to updated the req.body to the newly updated input
                    // 
                       $set: req.body
                }, {new: true });
                res.status(200).json(updatedPost)
                console.log(" Updated Post ")
            } 
            catch (error) {
                res.status(500).json(error)
            }
}   
else{
res.status(401).json('You can only update your post')
}
    } catch (error) {
        res.status(500).json(error)
    }


    // if username in the body is  === post's username 
   

})


// Get a post details by id 

router.get(('/:id'),  async (req, res) => {
    try {
        const Post = await PostDB.findById(req.params.id);
        res.status(200).json(Post)
    } catch (error) {
        res.status(500).json(error)
    }
})


// Get all Posts 
router.get("/", async (req, res ) => {
    const username = req.query.user;
    const catName = req.query.cat;

    try {
        let posts;
        if(username){
            posts = await PostDB.find({username})

            console.log(`${username} check`)
            // Find Categories 
        }else if (catName) {
            posts = await PostDB.find({categories: {
                $in:[catName]
            }})

        }else {
            posts  = await  PostDB.find();
        }

        res.status(200).json(posts)

    } catch (error) {
        res.status(500).json(error)
    }
})
module.exports = router;