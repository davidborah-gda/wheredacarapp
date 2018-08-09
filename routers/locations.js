const express = require('express');
const router = express.Router();//tiny lego brick
const Location = require('../models/location');

// routes (location:POST location:GET, location:DELETE)

// Location:POST (create new location)
router.post('/locations', async (req, res, next) => {
    const { lat, lon, user } = req.body;
    try {
        const location = new Location({ lat, lon, user });
        await location.save();
        res.status(201).json({
            msg: "Saved New Location",
            location
        }); 
    } catch (error) {
        next(error);
    }
});

// Locaiton:GET (by ID)
router.get('/locations/:id', async (req, res, next) => {
    
    try {
        res.status(201).json({
            msg: "Here be that location",
        
        }); 
    } catch (error) {
        next(error);
    }
});

//Delete Location: DELETE (by ID)
router.delete('/locations/:id', async (req, res, next) => {
    
    try {
       
        res.status(200).json({
            msg: "yayyy destruction location deleted"
        });
    }   catch (error) {
        next(error);
    }
});

module.exports = router;