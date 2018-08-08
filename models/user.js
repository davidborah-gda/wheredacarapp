const mongoose = require('mongoose');
const Schema = mongoose.Schema; //is the schema class
const userSchema = new Schema({
    email: {
        type: String,
        required: true
      },
    salt: {
      type: String,
      require: true
    },
    hash: {
      type: String,
      trim: true
    }
  });

const User = mongoose.model('User', userSchema);

module.exports = User;