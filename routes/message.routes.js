const express = require("express");
const router = express.Router();
const MessageModel = require('../models/Message.model');
const mongoose = require('mongoose');

const isLoggedIn = (req, res, next) => {  
  if (req.session.loggedInUser) {
      next()
  }
  else {
      res.status(409).json({
          message: 'Unauthorized user',
          code: 401,
      })
  };
};

router.post('/', isLoggedIn, (req, res, next) => {
  
  const {
    text, bookRelated, between
  } = req.body;
  
  let message = {
    between,
    text,
    bookRelated
  }
  MessageModel.create(message)
    .then((message) => {
        res.status(200).json(message)
      })
      .catch(() => {
        res.status(500).json({
          errorMessage: 'Something went wrong!',
        });
      })
})

router.get('/', isLoggedIn, (req, res, next) => {
  let id=mongoose.Types.ObjectId(req.session.loggedInUser._id);
  MessageModel.find({
      between: id
    })
    .populate({
      path: 'bookRelated',
      model: 'book'
    })
    .populate({
      path: 'between',
      model: 'user'
    })
    .then((allmessages) => {
      res.status(200).json(allmessages.filter(msg => (msg.bookRelated))) 
    })
    .catch((err) => {
      res.status(500).json({
        errorMessage: 'Something went wrong!',
      });
    })
  })

router.get('/:contactId', isLoggedIn, (req, res, next) => {
  let contactId = req.params.contactId;
  let user = req.session.loggedInUser;
  MessageModel.find({
      $and: [{
        between: user._id
      }, {
        between: contactId
      }]
    })
    .populate({
      path: 'bookRelated',
      model: 'book'
    })
    .populate({
      path: 'between',
      model: 'user',
    })
    .then((allmessages) => {
      res.status(200).json(allmessages.filter(msg => (msg.bookRelated))) 
    })
    .catch(() => {
      res.status(500).json({
        errorMessage: 'Something went wrong!',
      });
    })
  })

module.exports = router