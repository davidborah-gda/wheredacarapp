const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

const configuration = {
    usernameField: 'email'
};



const handler = async function localHandler(email, password, done){
    try {
        const user = await User.find({ email: username });
        if(!user) {
            done(null, false);
        }
        //things needs to change
        if(user.password !== password){
            done(null, false);
        }
        //this is probably change too
        done(null, user);
    } catch (error) {
        done(error);
    }
};

const strategy = new LocalStrategy(configuration, handler);

module.exports = strategy;