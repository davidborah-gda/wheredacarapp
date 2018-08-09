const mongoose = require('mongoose');
const Schema = mongoose.Schema; //is the schema class
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        maxLength: 64
      },
    salt: {
      type: String,
      // require: true  //TODO: remove - commented out for testing initially
    },
    hash: {
      type: String,
     // required: true  //TODO: remove - commented out for testing initially
    }
  });

const User = mongoose.model('User', userSchema);

module.exports = User;