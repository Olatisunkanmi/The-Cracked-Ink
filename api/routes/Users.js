const express = require('express');
const UserDB = require('../models/User');
var bcrypt = require('bcryptjs');
const router = express.Router();


// Update User 
// .put
// we use this method when we edit existing data in our database.


// Register a new user
router.put("/:id", async (req, res ) => {
    console.log(req.body)

    if(req.body.userId  === req.params.id) {
             // This is incase the user updates password 
            if(req.body.password){
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt)
                console.log(req.body.password)
            }
            try {
                
                const updatedUser = await UserDB.findByIdAndUpdate(req.params.id)
                res.status(200).json(updatedUser)
                console.log('first')

            } catch (error) {
                res.status(500).json(error)

            }
    }       
    // in the case where req.body.userID is not same as req.params.id
    // 
    else{
            res.status(401).json('You can update only your account')
    }
})

module.exports = router;