const router = require('express').Router()
const UserModel = require('../models/User.model');

const uploader = require('../config/cloudinary-setup.config')

router.post('/upload', uploader.single("imageUrl"), (req, res, next) => {
  console.log("photo", )

  if (!req.file) {
    console.log("there was an error uploading the file")
    next(new Error('No file uploaded!'));
    return;
  }
  res.status(200).json({photo:req.file.path })
 }
)


module.exports = router