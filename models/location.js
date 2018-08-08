const mongoose = require('mongoose');
const Schema = mongoose.Schema; //is the schema class
const locationSchema = new Schema({
    lat: {
      type: Number,
      required: true,
      min: -90,
      max: 90
    },
    lon: {
        type: Number,
        required: true,
        min: -180,
        max: 180
      },
      user: {
        type: Schema.Types.ObjectId,
        required: true
      }
  });

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;