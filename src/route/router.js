const express = require('express');
const router = express.Router();

//const collegeModel = require("../model/collegeModel")
const collegeControl  = require("../controllers/collegesController")
const internControl  = require("../controllers/internContoller")

router.post("/colleges", collegeControl.createCollege)

router.post("/interns", internControl.createIntern)

router.get("/collegeDetails", collegeControl.collegeDetails)


module.exports = router;