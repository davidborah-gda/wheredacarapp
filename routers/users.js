const express = require('express');
const router = express.Router();//tiny lego brick
const passport = require('passport');


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

const jwt = require('jsonwebtoken');
function auth(req, res, next) {
const tokenWithBearer = req.headers.authorization;
//is there a token
if(!tokenWithBearer) {
    next({msg: 'Unauthorized', status: 401 });
}
const isValid = tokenWithBearer.includes('Bearer');
//is the token formatted appropriately
if(!isValid) {
    next({msg: 'Unauthorized', status: 401 });
}
//this removes the 'Bearer ' part leaving just the token
const token = tokenWithBearer.slice(7);
try {
    console.log(token);
    const payload = jwt.verify(token, process.env.SECRET);
    console.log(payload);
    req.email = payload.eamil;
    req.id = payload.id;
    next();
}
catch(err){
    next({msg: 'Unauthorized', status: 401 });
 }

}

//Deleted User: DELETE by email
router.delete('/users/:email', auth, async (req, res, next) => {
    res.send(`Deleting user with the email ${req.params.email}`)
});

module.exports = router;