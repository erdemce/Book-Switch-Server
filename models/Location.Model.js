const {
  Schema,
  model
} = require("mongoose");

const locationSchema = new Schema({
  city: {
    type: String,
    require: true
  },

  country: {
    type: String,
    require: true
  },

  lat: {
    type: String,
    require: true
  },

  lng: {
    type: String,
    require: true
  }
});

const LocationModel = new model("location", locationSchema);

module.exports = LocationModel;