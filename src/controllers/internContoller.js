const internModel = require("../models/internModel");
const collegeModel = require("../models/collegeModel")

const isValid = function (value) {
  if (typeof value == undefined || value == null) return false;
  if (typeof value === "string" && value.trim().length === 0) return false;
  return true;
};

const createIntern = async function (req, res) {
  try {
    let data = req.body;

    if (Object.keys(data).length > 0) {
      if (!isValid(data.name)) {
        return res
          .status(400)
          .send({ status: false, msg: "First name is required" });
      }
      if (!isValid(data.collegeId)) {
        return res
          .status(400)
          .send({ status: false, msg: "College Id is required" });
      }
      if(!isValid(data.email)){return res.status(400).send({status:false , msg:"email is required"})}
      if(!isValid(data.mobile)){return res.status(400).send({status:false , msg:"mobile is required"})}
      if(!isValid(data.collegeId)){return res.status(400).send({status:false , msg:"collegeId is required"})}
      if(!isValid(data.name)){return res.status(400).send({status:false , msg:"name is required"})}
      if(data.isDeleted!= null) data.isDeleted = false
      if (!/^\w+([\.-]?\w+)@\w+([\. -]?\w+)(\.\w{2,3})+$/.test(data.email)) {
        return res
          .status(400)
          .send({ status: false, msg: "Please provide a valid email" });
      }
      if (!/^([+]\d{2})?\d{10}$/.test(data.mobile)) {
        return res
          .status(400)
          .send({ status: false, msg: "please provide a valid moblie Number" });
      }
      if (!(/^[0-9a-fA-F]{24}$/.test(data.collegeId))) {
        return res.status(400).send({ status: false, message: 'please provide valid collegeId' })
    }


      let dupli = await internModel.findOne({ email: data.email });

      if (dupli) {
        return res
          .status(400)
          .send({ status: false, msg: "Email already exists" });
      }
      // check : if collegeId is invalid 
      const college = await collegeModel.find({ _id: data.collegeId })
      if (!college.length > 0) return res.status(400).send({ status: false, message: "Please enter valid collegeId"})


      let savedData = await internModel.create(data);
      return res.status(201).send({ internDetails: savedData });
    } else {
      return res.status(400).send({ ERROR: "BAD REQUEST" });
    }
  } catch (err) {
    return res.status(500).send({ ERROR: err.message });
  }
};

module.exports.createIntern = createIntern;
