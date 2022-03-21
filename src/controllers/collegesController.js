const collegeModel = require("../models/CollegeModel");

const createCollege = async function (req, res) {
  try{
    let data = req.body;
    let savedData = await collegeModel.create(data);
   return res.status(201).send({ msg: savedData });
  }
    catch(err){
     return  res.status(500).send({Error: err.message})
    }
  };

  module.exports.createCollege = createCollege;
