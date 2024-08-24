const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let blogPost = new Schema(
  {
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  isDelete:{type:Boolean, default:false},
  userId: {
    type: Schema.Types.ObjectId,
    required: false,
    default: null,
  },

}, { timestamps: true });



module.exports = mongoose.model("posts", blogPost);
