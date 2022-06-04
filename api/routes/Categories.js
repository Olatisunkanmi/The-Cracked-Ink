const express = require('express');
const CategoryDB = require('../models/Categories');


const router = express.Router();




// Create new category

router.post("/create", async (req, res ) => { 

    const newCat = new CategoryDB(req.body);

    try {
        
        const savedCategory = await newCat.save()
        res.status(201).json(savedCategory)

    } catch (error) {
        res.send(500).json(error)
    }
})


// Get all categories 

router.get('/', async (req, res ) => {
    try {
            const cat = await CategoryDB.find();
            res.status(200).json(cat)
    } catch (error) {
            res.send(500).json(error)
    }
})
module.exports = router;