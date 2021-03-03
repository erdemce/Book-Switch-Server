const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');

const BookModel = require('../models/Book.model');

router.post('/add', (req, res) => {
    const {title, author, language, description,photo,category} = req.body;
    const user = req.session.loggedInUser;
    
    if (!title || !author || !language || !description ||category) {
        res.status(500)
          .json({
            errorMessage: 'Please fill all the required fields'
          });
        return;  
    }
  
    BookModel.create({title, author, language, description,photo,category, owner:user._id})
      .then((bookData) => {
        res.status(200).json(bookData)
      })
      .catch((err) => {
          res.status(500).json({
            errorMessage: 'Something went wrong!',
          });
        })
});

router.post('/signin', (req, res) => {
    const {email, password } = req.body;
    
    if ( !email || !password) {
        res.status(500).json({
            error: 'Please enter your email and password',
       })
      return;  
    }
    const myRegex = new RegExp(/^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/);
    if (!myRegex.test(email)) {
        res.status(500).json({
            error: 'Email format not correct',
        })
        return;  
    }
    
    UserModel.findOne({email})
      .then((userData) => {
           
          bcrypt.compare(password, userData.passwordHash)
            .then((doesItMatch) => {
                
                if (doesItMatch) {
                  
                  userData.passwordHash = "***";
                  req.session.loggedInUser = userData;
                  res.status(200).json(userData)
                }
                
                else {
                    res.status(500).json({
                        error: 'Password doesn\'t match',
                    })
                  return; 
                }
            })
            .catch(() => {
                res.status(500).json({
                    error: 'Email format not correct',
                })
              return; 
            });
      })
      .catch((err) => {
        res.status(500).json({
            error: 'Email does not exist',
            message: err
        })
        return;  
      });
  
});
 
router.post('/logout', (req, res) => {
    req.session.destroy();
    res.status(204).json({});
})

const isLoggedIn = (req, res, next) => {  
  if (req.session.loggedInUser) {
      next()
  }
  else {
      res.status(401).json({
          message: 'Unauthorized user',
          code: 401,
      })
  };
};

router.get("/book/:id", (req, res, next) => {
  
});

module.exports = router;
