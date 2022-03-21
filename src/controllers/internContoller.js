const internModel = require("../models/InternModel");

const internCreate = async function (req, res) {
    try{
         let data = req.body;
        let savedData = await internModel.create(data);
        return res.send({ msg: savedData });
    }
   catch(err){
return res.status(500).send({Error: err.message})
   }
  };

  module.exports.internCreate = internCreate;
