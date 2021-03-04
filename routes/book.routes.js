const express = require('express')
const router = express.Router()

const BookModel = require('../models/Book.model');

const isUserBook=(req,res,next)=>{
  let user = req.session.userData
  let id = req.params.id;

  Book.Model.findById(id)
    .then((book) => {
      if(book.owner=user._id){
        next()
      }
      else {
        res.status(401).json({
            message: 'Unauthorized user',
        })}
    })
    .catch((err) => {
      res.status(500).json({
        errorMessage: 'Something went wrong!',
      });
    })
}

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

router.post('/add',isLoggedIn, (req, res) => {
    const {title, author, language, description,photo,category} = req.body;
    const user = req.session.loggedInUser;
    
    if (!title || !author || !language || !description ||category) {
        res.status(500)
          .json({
            errorMessage: 'Please fill all the required fields',
            body:request.body
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

router.post('/edit/:id',isLoggedIn,isUserBook, (req, res) => {

  let user = req.session.userData
  let bookId = req.params.id;

  const {title, author, language, description,photo,category} = req.body;
  if (!title || !author || !language || !description ||category) {
    res.status(500)
      .json({
        errorMessage: 'Please fill all the required fields',
        body:request.body
      });
    return;  
}
  let updatedBook= {
    title, author, language, description,photo,category,
    owner: user._id,
  }
  BookModel.findByIdAndUpdate(bookId, updatedBook)
    .then((bookData) => {
      res.status(200).json(bookData)
    })
    .catch(() => {
      res.render('not-authorised.hbs')
    })
})

router.get("/:id", (req, res, next) => {
  let bookId=req.params.id;
  BookModel.findById(bookId)
    .then((book) => {
      res.status(200).json(book) 
    })
    .catch((err) => {
      res.status(500).json({
        errorMessage: 'Something went wrong!',
      });
    })
});

router.get('/', (req, res, next) => {
  BookModel.find()
    .then((allBooks) => {
      res.status(200).json(allBooks) 
    })
    .catch((err) => {
      res.status(500).json({
        errorMessage: 'Something went wrong!',
      });
    })
});

router.get('/delete/:id',isLoggedIn,isUserBook, (req, res, next) => {
  let bookId = req.params.id;
  BookModel.findByIdAndRemove(bookId)
    .then((bookData) => {
      res.status(200).json({message: Success})
    })
    .catch((err) => {
      res.status(500).json({
        errorMessage: 'Something went wrong!',
      });
    })
})

module.exports = router;
