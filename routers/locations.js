const express = require('express');
const router = express.Router();//tiny lego brick
const Location = require('../models/location');

// routes (location:POST location:GET, location:DELETE)

// Location:POST (create new location)
router.post('/locations', async (req, res, next) => {
    const { lat, lon } = req.body;
    try {
        const location = new Location({ lat, lon });
        await location.save();
        res.status(201).json({
            msg: "Saved New Location",
            location
        }); 
    } catch (error) {
        next(err);
    }
});

// Locaiton:GET (by ID)
router.get('/locations:id', async (req, res, next) => {
    const { lat, lon } = req.body;
    try {
        const location = new Location({ lat, lon });
        await location.save();
        res.status(201).json({
            msg: "Here be that location",
            location
        }); 
    } catch (error) {
        next(err);
    }
});

//Delete Location: DELETE (by ID)
router.delete('/locations/:id', async (req, res, next) => {
    const { id, } = req.params;
    try {
        await Location.findByIdAndRemove(id);
        res.status(200).json({
            msg: "yayyy destruction location deleted"
        });
    }   catch (err) {
        next(err);
    }
});

module.exports = router;