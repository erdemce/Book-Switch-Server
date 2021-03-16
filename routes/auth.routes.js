
const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');


const UserModel = require('../models/User.model');
const LocationModel = require('../models/Location.Model');

router.post('/signup', (req, res) => {
    const {username, name, lastName, email, password,location} = req.body;
 
    
    if (!username || !email || !password || !location) {
        res.status(500)
          .json({
            message: 'Please enter username, email, city and password',
          });
        return;  
    }
    const myRegex = new RegExp(/^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/);
    if (!myRegex.test(email)) {
        res.status(500).json({
          message: 'Email format not correct',
        });
        return;  
    }
    const myPassRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
    if (!myPassRegex.test(password)) {
      res.status(500).json({
        message: 'Password needs to have 8 characters, a number and an Uppercase alphabet'          
      });
      return;  
    }
  
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    UserModel.create({username, email, location, name,lastName, passwordHash: hash})
      .then((userData) => {
        UserModel.findById(userData._id)
    .populate({
      path: 'location',
      model: 'location',
      select:`city`
    })
      .then((userData) => {
        
        
        userData.passwordHash = "***";
        req.session.loggedInUser = userData;
        res.status(200).json(userData)
      })})
      .catch((err) => {
        if (err.code === 11000) {
          res.status(500).json({
            message: 'Email entered already exist!',
          });
        } 
        else {
          res.status(500).json({
            message: 'Something went wrong!',
          });
        }
      })
    })
router.post('/login', (req, res) => {
    const {email, password } = req.body;
    
    if ( !email || !password) {
        res.status(500).json({
            message: 'Please enter your email and password',
       })
      return;  
    }
    const myRegex = new RegExp(/^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/);
    if (!myRegex.test(email)) {
        res.status(500).json({
          message: 'Email format not correct',
        })
        return;  
    }
    
    UserModel.findOne({email})
    .populate({
      path: 'location',
      model: 'location',
      select:`city`
    })
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
                      message: 'Password doesn\'t match',
                    })
                  return; 
                }
            })
            .catch(() => {
                res.status(500).json({
                  message: 'Email format not correct',
                })
              return; 
            });
      })
      .catch((err) => {
        res.status(500).json({
          message: 'Email does not exist',
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
      })
  };
};

router.get("/user", isLoggedIn, (req, res, next) => {

  res.status(200).json(req.session.loggedInUser);

})

router.post('/user',isLoggedIn , (req, res) => {


  let user = req.session.loggedInUser

  console.log(req.body)

  const {username, name, lastName, photo, location, _id} = req.body;

  if(user._id!==_id){
    res.status(401).json({
      message: 'Unauthorized user',
  })

  }
  if (!username||!location) {
    res.status(500)
      .json({
        message: 'Please fill all the required fields',
      });
    return;  
}
  let updatedUser= {username,name,lastName,location,photo}
  UserModel.findByIdAndUpdate(_id, updatedUser,{new:true})
  .populate({
    path: 'location',
    model: 'location'
  })

    .then((savedUser) => {
      savedUser.passwordHash = "***";
      req.session.loggedInUser = savedUser;
      res.status(200).json(savedUser)
    })
    .catch(() => {
      res.status(500)
      .json({
        message: 'Something went Wrong!',
      });})
})

module.exports = router;
