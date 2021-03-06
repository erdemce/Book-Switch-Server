const express = require('express')
const router = express.Router()
const LocationModel = require('../models/Location.Model');


router.get('/', (req, res, next) => {
  LocationModel.find()
  
    .then((locations) => {
      locations.sort((f,s)=>f.city > s.city ? 1 : -1 )
      res.status(200).json(locations) 
    })
    .catch((err) => {
      res.status(500).json({
        errorMessage: 'Something went wrong!',
      });
    })
});

module.exports = router;