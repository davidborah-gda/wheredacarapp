const mongoose = require('mongoose');
const Schema = mongoose.Schema; //is the schema class
const locationSchema = new Schema({
    latitude: {
      type: Number,
      required: true,
      min: -90,
      max: 90
    },
    longitude: {
        type: Number,
        required: true,
        min: -180,
        max: 180
      }
  });

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;