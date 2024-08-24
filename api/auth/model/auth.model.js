const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let users = new Schema(
  {

    firstName: {
      type: Schema.Types.String,
      required: false,
      default: "",
    },
    lastName: {
      type: Schema.Types.String,
      required: false,
      default: "",
    },
    
    email: { type: Schema.Types.String, required: true, max: 225 },
    fcmToken: {
      type: Schema.Types.String,
      required: false,
      default: "",
    },
  
    status: {
      type: Schema.Types.String,
      required: false,
      default: "",
    },

  
  
  
    password: { type: String, required: true, max: 225 },
   
    
    isDeleted: {
      type: Schema.Types.Boolean,
      required: true,
      default: false,
    },
   
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("users", users);
