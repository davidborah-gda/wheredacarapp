const express = require('express');
const router = express.Router();//tiny lego brick
const User = require('../models/user');

// routes (login:POST logout:GET, signup:POST, delete)

// SignUp:POST (create new user)
router.post('/signup', async (req, res, next) => {
    const { email, hash, salt } = req.body;
    try {
        const user = new User({ email, hash, salt });
        await user.save();
        res.status(201).json({
            msg: "Saved New User",
            user
        }); 
    } catch (error) {
        next(err);
    }
});

// Login:POST (login)
router.post('/login', async (req, res, next) => {
    const { email, hash, salt } = req.body;
    try {
        const user = new User({ email, hash, salt });
        await user.save();
        res.status(201).json({
            msg: "Logged In User",
        }); 
    } catch (error) {
        next(err);
    }
});

// Logout:GET (logout)
router.get('/logout', async (req, res, next) => {
    const { email, hash, salt } = req.body;
    try {
        const user = new User({ email, hash, salt });
        await user.save();
        res.status(201).json({
            msg: "Logged Out User",
        }); 
    } catch (error) {
        next(err);
    }
});

//Deleted User: DELETE by id
router.delete('/users/:id:email', async (req, res, next) => {
    const { id, } = req.params;
    const { email } = req.body;
    try {
        await User.findByIdAndRemove(id, { email });
        res.status(200).json({
            msg: "yayyy destruction user deleted"
        });
    }   catch (err) {
        next(err);
    }
});

module.exports = router;