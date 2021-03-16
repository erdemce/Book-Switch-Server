
const axios = require('axios');
const express = require('express')
const router = express.Router()

const BookModel = require('../models/Book.model');


const isUserBook=(req,res,next)=>{
  let user = req.session.loggedInUser
  let id = req.params.id;

  BookModel.findById(id)
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
        message: 'Something went wrong!',
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
          code: 4091,
      })
  };
};

router.post('/add',isLoggedIn, (req, res) => {
    const {title, author, language, description,photo,category,switchMode} = req.body;
    const user = req.session.loggedInUser;
    
    if (!title || !author || !language || !description ||!category||!switchMode) {
        res.status(500)
          .json({
            message: 'Please fill all the required fields'
          });
        return;  
    }
  
    BookModel.create({title, author, language, description,photo,switchMode,category, owner:user._id})
      .then((bookData) => {
        BookModel.findById(bookData._id)
        .populate({
          path: 'owner',
          populate: {
            path: "owner.location",
            model:"location"
            
          }})
        .then((populatedBook)=>{
          res.status(200).json(populatedBook)
        })
      })
      .catch((err) => {
          res.status(500).json({
            message: 'Something went wrong!'
          });
        })
});

router.post('/edit/:id',isLoggedIn,isUserBook, (req, res) => {

  let user = req.session.loggedInUser
  let bookId = req.params.id;
  console.log(req.body)

  const {title, author, language, description,category,switchMode,photo} = req.body;
  if (!title || !author || !language || !description ||!category||!switchMode) {
    res.status(500)
      .json({
        message: 'Please fill all the required fields',
      });
    return;  
}
  let updatedBook= {
    title, author, language, description,category,switchMode,photo,
    owner: user._id,
  }
  BookModel.findByIdAndUpdate(bookId, updatedBook)
    .then((bookData) => {
      res.status(200).json(bookData)
    })
    .catch(() => {
      res.status(500)
      .json({
        message: 'Something went wrong, please try again',
      });
})
})

router.get("/get/:id", (req, res, next) => {
  let bookId=req.params.id;

  if(bookId==="random"){
    BookModel.find()
    .populate({
      path: 'owner',
      model: `user`,
      select: `username name lastName location`,
      populate: {
        path:`location`,
        model: `location`,
        select: `city`
      }
      
    })
    .then((allBooks) => {
      let index=Math.floor(Math.random()*allBooks.length)
      res.status(200).json(allBooks[index]) 

    })
      
    .catch((err) => {
      
      });
    }else{
      BookModel.findById(bookId)
  .populate({
    path: 'owner',
    model:"user",
    select: "username location"
  })
    .then((book) => {
      res.status(200).json(book) 
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Something went wrong!',
      });
    })
    }
  })


router.get('/', (req, res, next) => {
  BookModel.find()
  .populate({
    path: 'owner',
    model: `user`,
    select: `username name lastName location`,
    populate: {
      path:`location`,
      model: `location`,
      select: `city`
    }
    
  })
    .then((allBooks) => {
      res.status(200).json(allBooks) 
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Something went wrong!',
      });
    })
});

router.get('/user/:id', (req, res, next) => {
  let userId=req.params.id;
  BookModel.find({owner:userId})
  .populate({
    path: 'owner',
    model: `user`,
    select: `username name lastName location`,
    populate: {
      path:`location`,
      model: `location`,
      select: `city`
    }
  })
    .then((allBooks) => {
      res.status(200).json(allBooks) 
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Something went wrong!',
      });
    })
});

router.delete('/delete/:id',isLoggedIn,isUserBook, (req, res, next) => {
  let bookId = req.params.id;
  BookModel.findByIdAndRemove(bookId)
    .then((book) => {
      res.status(200).json(book)
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Something went wrong!',
        err
      });
    })
})

router.get("/search/:title?/:author?",(req, res, next) => {
  let title = req.params.title;
  let author=(req.params.author)? req.params.author:"";
  let search=(title)?title.split(" ").join("+"):""  
    search=(author)?search+"+inauthor:"+author.split(" ").join("+"):search
    console.log(search)
  
  axios
       .get(process.env.GOOGLE_BOOK_API_URL+search+"&key="+process.env.GOOGLE_BOOK_API_KEY)
        .then((response) => {
          res.status(200).json(response.data.items) 
        })
        .catch((err) => {
          res.status(500).json({
            message: 'Something went wrong!',
          });
})
})

module.exports = router;
