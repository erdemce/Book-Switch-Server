const {
  Schema,
  model
} = require("mongoose");
let defaultImg = "https://images.unsplash.com/photo-1603289847962-9da9640785e3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80";

const bookSchema = new Schema({
  title: {
    type: String,
    require: true
  },

  author: {
    type: String,
    require: true
  },

  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
    require: true
  },

  language: {
    type: String,
    ENUM: ["English", "French","German", "Spanish" ]
  },

  description: {
    type: String
  },

  photo:{
    type: String,
    default: defaultImg
  },
  category: {
    type: String,
    ENUM: ['1', '2', '3'],
    require: true
  },
 
  switchMode: {
    type: String,
    ENUM: ['switch', 'gift', 'temporary-switch'],
  }
});

const BookModel = new model("book", bookSchema);

module.exports = BookModel;