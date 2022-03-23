const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique:true,
      required: true,
    },

    fullName: {
      type: String,
      required: true,
    },

    
 logoLink: {

  type:String,
  required:true,
  match:[/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,'Enter correct url!']

 }, 

    isDeleted:{
      type: Boolean,
      default: false,
    },
    
  },

    

  { timestamps: true }
);

module.exports = mongoose.model("College", collegeSchema);