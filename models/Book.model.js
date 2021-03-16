const { Schema, model } = require("mongoose");
let defaultImg =
  "https://images.unsplash.com/photo-1603289847962-9da9640785e3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80";

const bookSchema = new Schema({
  title: {
    type: String,
    require: true,
  },

  author: {
    type: String,
    require: true,
  },

  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
    require: true,
  },

  language: {
    type: String,
    require:true,
    ENUM: ["Chinese","Dutch","English", "French", "German","Italian","Japanese", "Portuguese","Russian","Spanish","Turkish","Other"],
  },

  description: {
    type: String,
  },

  photo: {
    type: String,
    default: defaultImg,
  },
  category: {
    type: String,
    require: true
    // ENUM: [
    //   "Action and Adventure",
    //   "Classics",
    //   "Comic Book or Graphic Novel",
    //   "Detective and Mystery",
    //   "Fantasy",
    //   "Historical Fiction",
    //   "Horror",
    //   "Literary Fiction",
    //   "Romance",
    //   "Science Fiction",
    //   "Short Stories",
    //   "Suspense and Thrillers",
    //   "Womens Fiction",
    //   "Biographies and Autobiographies",
    //   "Cookbooks",
    //   "History",
    //   "Memoir",
    //   "Poetry",
    //   "Self-help",
    //   "True Crime",
    //   "Children",
    //   "Education"
    // ],
  },

  switchMode: {
    type: String,
    require: true,
    ENUM: ["switch", "gift", "temporary-switch"],
  },
});

const BookModel = new model("book", bookSchema);

module.exports = BookModel;
