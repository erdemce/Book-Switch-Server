const router = require('express').Router()

const uploader = require('../config/cloudinary-setup.config')

router.post('/upload', uploader.single("imageUrl"), (req, res, next) => {
  // the uploader.single() callback will send the file to cloudinary and get you and obj with the url in return
  console.log('file is: ', req.file)
  
  if (!req.file) {
    console.log("there was an error uploading the file")
    next(new Error('No file uploaded!'));
    return;
  }

  res.status(200).json({photo: req.file.path})
})


module.exports = router