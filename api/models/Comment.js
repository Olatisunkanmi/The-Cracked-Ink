const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema( {
        content : {
                type: String,
                required: true
        },

        likes : {
                type: String,
                required: false,
        }, 
},
        {timestamps : true }
)

module.exports =  mongoose.model("Comment", CommentSchema)