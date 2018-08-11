const mongoose = require('mongoose');
const Schema = mongoose.Schema; //is the schema class
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

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
      require: true  
    },
    hash: {
      type: String,
     required: true
    }
  });

userSchema.methods.setPassword = function setPassword(password){
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512')
                      .toString('hex');
  this.salt = salt;
  this.hash = hash;
}
userSchema.methods.isValidPassword = function isValidPassword(password){
  const possibleHash = crypto.pbkdf2Sync(password, this.salt, 100000, 64, 'sha512')
                              .toString('hex');
  return this.hash === possibleHash;
}

userSchema.methods.generateJWT = function generateJWT(){
  const payload = {
    id: this._id,
    email: this.email,
    expiration: new Date()
  };
  const token = jwt.sign({}, process.env.SECRET);
  return token;
}

const User = mongoose.model('User', userSchema);

module.exports = User;