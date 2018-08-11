const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

const configuration = {
    usernameField: 'email'
};



const handler = function localHandler(email, password, done){
        User.findOne({ email: email })
        .then(user => {
        if(!user) {
            return done(null, false);
        }
        if(!user.isValidPassword(password)){
            return done(null, false);
        }
        const token = user.generateJWT();
        return done(null, user, { token });
    })
    .catch(done);
};

const strategy = new LocalStrategy(configuration, handler);

module.exports = strategy;