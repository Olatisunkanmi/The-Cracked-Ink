const express = require('express');
const CommentDB = require('../models/Comment');
const PostDB = require("../models/Post")

const router = express.Router();

// Create new Comment 
// by appending comment of the post

router.put('/:id',  async (req, res)   => {
    const   {username, comment} = req.body;
       
            try {
                const post = await PostDB.findById(req.params.id);
                // res.status(201).json(post)
                       if(post){
                                    try {
                                        // Get the index of tthe arrays in the posts comments 
                                        const CommentSection =    post.comments;
                                        CommentSection.push(comment)
                                        const newComment = await post.save()

                                        res.status(201).json(newComment)
                                    } catch (error) {
                                            
                                        res.status(404).json(error)
                                    } 
                       }
        }catch (error) {
                    res.status(404).json(error)
                }

  
} )


module.exports = router;
