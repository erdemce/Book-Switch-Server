require('../db/index.js');

const mongoose = require('mongoose');
let UserModel = require('../models/User.model')
let BookModel = require('../models/Book.model')
let MessageModel=require("../models/Message.model")

MessageModel.create([{
            text: "Hello I want to read this book. Can we switch our books",
            between:["60414eb413ca9f304fd69bab","60414eb413ca9f304fd69baa"],
            bookRelated: "60414eb413ca9f304fd69bb0",
        },
        {
          text: "Yes Of course, and I want to read your book.",
          between:["60414eb413ca9f304fd69baa","60414eb413ca9f304fd69bab"],
          bookRelated: "60414eb413ca9f304fd69bb0",
      },
      {
        text: "Great! Where and When dou you want to meet to switch our books?",
        between:["60414eb413ca9f304fd69bab","60414eb413ca9f304fd69baa"],
        bookRelated: "60414eb413ca9f304fd69bb0",
    },
    {
      text: "Tomorrow at 5 pm perhaps we can have a coffee at Starbucks at the city center",
      between:["60414eb413ca9f304fd69baa","60414eb413ca9f304fd69bab"],
      bookRelated: "60414eb413ca9f304fd69bb0",
  },
  {
    text: "Great! See you tomorrow",
    between:["60414eb413ca9f304fd69bab","60414eb413ca9f304fd69baa"],
    bookRelated: "60414eb413ca9f304fd69bb0",
},

{
  text: "Hello I want to read this book. Is it still available?",
  between:["60414eb413ca9f304fd69bae","60414eb413ca9f304fd69baa"],
  bookRelated: "60414eb413ca9f304fd69bb0",
},
{
text: "No sorry I will  switch it tomorrow with another user.",
between:["60414eb413ca9f304fd69baa","60414eb413ca9f304fd69bae"],
bookRelated: "60414eb413ca9f304fd69bb0",
},
{
text: "Ok! Next Time",
between:["60414eb413ca9f304fd69bae","60414eb413ca9f304fd69baa"],
bookRelated: "60414eb413ca9f304fd69bb0",
}       
    ])
    .then((messages) => {
        console.log('Messages seeded', messages.length)
    })
    .catch((err) => {
        console.log(err)
    })