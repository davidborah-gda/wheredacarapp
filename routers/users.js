const express = require('express');
const router = express.Router();//tiny lego brick
const passport = require('passport');
const auth = require('../middlewares/auth');


const User = require('../models/user');

// routes (login:POST logout:GET, signup:POST, delete)

// SignUp:POST (create new user)
router.post('/signup', async (req, res, next) => {
    const { email, password } = req.body;
    if(!email || !password) 
    next({ msg: "You have not submitted an email and a password", status: 400 });
    try {
        const user = new User({ email });
        user.setPassword(password);
        await user.save();
        res.redirect('/login');
    } catch (error) {
     next(error);   
    }
});

// Login:POST (login)
router.post('/login',
 passport.authenticate('local', { failureRedirect: '/login', session: false}),
 async (req, res, next) => { 
  if(req.isAuthenticated()){
      res.status(200).json({
          token: req.authInfo.token
      })
  } else {
      next({ msg: 'Either youre username or your password is incorrect', status: 400 });
  }
});

// Logout:GET (logout)
router.get('/logout', async (req, res, next) => {
    try {
        res.status(201).json({
            msg: "Logged Out User",
        }); 
    } catch (error) {
        next(err);
    }
});

//Deleted User: DELETE by email
//TODO: You need to implement this.
router.delete('/users/:email', auth, async (req, res, next) => {
    //you should check that req.eamil is the same as req.params.email
    //if they are then delete.
    //If not then error.
    res.send(`Deleting user with the email ${req.params.email}`)
});

module.exports = router;