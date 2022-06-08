const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema ({

    username:{
        type:String,
        required:true,
        unique: false,
    },
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc: {
        type:String,
        required:true,
    },
    photo: {
        type:String,
        required: false,
    },
    content:{
        type: String,
        required: true,
    },
    categories:{
        type:Array,
        required:true
    }
},
        {timestamps: true}
)

module.exports = mongoose.model("Post", PostSchema);
