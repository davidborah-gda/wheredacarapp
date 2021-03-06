const express = require('express');
const server = express();
const dotenv = require('dotenv');
const mongoose = require ('mongoose');
const passport = require('passport');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('./middlewares/errorHandler');
const notFoundHandler = require('./middlewares/404');
const localStrategy =require('./strategies/local');

//setup environment variables
dotenv.config();

//passport configuration
passport.use(localStrategy);

//passport inititalization
server.use(passport.initialize());

//connect to the database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

//routers
const userRouter = require('./routers/users');
const locationRouter = require('./routers/locations');

// setup our port
const port = process.env.PORT || 8008;

// power ups (middleware)
server.use(helmet());
server.use(morgan("combined"));
server.use(bodyParser.json());  //accepts json data
server.use(bodyParser.urlencoded( { extended: true } ));  //accept html form data

//models
const User = require('./models/user');
const Location = require('./models/location');

//routers
server.use('/api/', userRouter);
server.use('/api', locationRouter);

//404 handler
server.use(notFoundHandler);
 //error handler
server.use(errorHandler);

// kick it off
server.listen(port, () => {
    console.log(`Now listening on port: ${port}`);
});