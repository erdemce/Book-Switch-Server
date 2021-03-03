const {
  Schema,
  model
} = require("mongoose");

const messageSchema = new Schema({
  text: {
    type: String,
    require: true
  },
  between: {
    type: [Schema.Types.ObjectId],
    ref: "user",
    require: true
  },

  bookRelated: {
    type: Schema.Types.ObjectId,
    ref: "book",
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const MessageModel = new model("message", messageSchema);

module.exports = MessageModel;