const express = require("express");
const router = express.Router(); //routing express
const User = require("../models/User"); //schema use
const fetchUser = require("../middleware/fatchUser");

// --------------------------------------- get user----------------------------------
router.post("/getuser", fetchUser, async (req, res) => {
    try {
      const userId = req.user.id
      console.log({userId})
      const user = await User.findById(userId).select("-Password"); //pass bad die baki ta fetch kora (- password)
      console.log(user)
      res.send(user)
    } catch (error) {
      res.status(500).send("Some internal server error !");
    }
  });
  
  module.exports = router;