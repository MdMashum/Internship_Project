const express = require('express');
const router = express.Router();
const collegeController= require("../controllers/collegesController")
const internController = require("../controllers/internContoller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/functionup/colleges", collegeController.createCollege  )
router.post("/functionup/interns" ,internController.internCreate )


//The userId is sent by front end
//router.get("/users/:userId",  userController.getUserData1)



module.exports = router;