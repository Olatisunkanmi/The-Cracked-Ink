const express = require('express');
const User = require('../models/User');
var bcrypt = require('bcryptjs');
const router = express.Router();


// Register
// This is how to create a new user and connecting our databse and creating a new user.
// .post
// we use this method when we creat. 


// Register a new user
router.post("/register", async (req, res) => {

    
    
    try{
        console.log(req.body);
        

      const  salt = await bcrypt.genSalt(10  );
     const hasssedPassword =  await  bcrypt.hash(req.body.password,  salt);
         
          const newUser = new User ({
            username : req.body.username,
            email : req.body.email,
            password :hasssedPassword
      
        });
     

        await newUser.save();
        res.status(201).json(newUser);
        console.log('User Created ')




    } catch (err){
        res.status(500).json(err);
        console.log(err)
     }

});

// Login as user with database details 

router.post("/login",  async ( req, res )=> {
            console.log(req.body)

    try {   
        const user = await User.findOne({username: req.body.username})
        !user && res.status(400).json('Wrong Credentials')
        

        const password = await bcrypt.compare(req.body.password, user.password)
        !password && res.status(400).json('Wrong Credentials')
        
        res.status(200).json(user)
    } catch (error) {

        
    }
})


module.exports = router;