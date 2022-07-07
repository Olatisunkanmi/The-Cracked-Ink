const express = require('express');
const UserDB = require('../models/User');
const PostDB = require('../models/Post');
var bcrypt = require('bcryptjs');
const User = require('../models/User');
const { findById } = require('../models/User');
const router = express.Router();


// Update User 
// .put
// we use this method when we edit existing data in our database.

router.put("/:id", async (req, res ) => {
    console.log(req.body)

    if(req.body.userId  === req.params.id) {
             // This is incase the user updates password 
            if(req.body.password){

            
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt)
            }
            try {
                
                const updatedUser = await UserDB.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                }, {new : true });

                res.status(200).json(updatedUser)
                

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



// delete an existing user 
router.delete('/:id',  async (req, res) => {
if (req.body.userId === req.params.id){
     try {

        //finding user account.
                             try {
                        // deleting user posts.
                                await PostDB.deleteMany({ 
                                    // checks username if username === DB username 
                                    username: user.username})
                        // deleting user accounts.
                                await UserDB.findByIdAndDelete(req.params.id)
                                res.status(200).json('User deleted ');

                        } catch (error) {
                                res.status(401).json('You can delete only your account ')
                        }   

     } catch (error) {
                 res.status(404).json('User not Found')
                    }


        } else {
            res.status(401).json('Only Permitted to delete own account')
        }
})


// Fething a User data/ Bio

router.get("/:id", async (req, res ) => {
    console.log(req.body);
        
    if(req.body.userId === req.params.id ){
   
                    try {
            const user = await UserDB.findById(req.params.id);
                    // const {password, ...otherDetails} = user._doc;

                res.status(200).json(user)
                console.log('user got')

            } catch (error) {
                res.status(404).json(error)
                console.log('get user failed')
            }
    } 
    else {
        console.log("You can only get your data")
    }
})
// Get all users as Admin 
// router.get('/all', async (req, res ) => ){

// }



module.exports = router;