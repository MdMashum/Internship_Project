const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const internSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    mobile:{
      type:String,
      trim:true,
      required:true,
      unique:true,
    },
    collegeId:{
      type:ObjectId,
      ref:"College",
    },
    
    isDeleted: {
      type: Boolean,
      default: false,
    },
    
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Intern", internSchema);