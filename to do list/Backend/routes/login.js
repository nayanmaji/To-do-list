const express = require("express");
const router = express.Router(); 
const User = require("../models/User"); 
const { body, validationResult } = require("express-validator"); //(express validation site)
const bcrypt = require("bcryptjs"); //module enables storing passwords as hashed passwords instead of plaintext.
const jwt = require("jsonwebtoken"); //jwt node js (web token,use for user verifection)


const JWT_SECRET = "abc@#lkj"; //jwt web token secrit code

// ------------------------------------user login------------------------------------
router.post(
    "/login",
    [
      body("Email", "enter valid Email").isEmail(),
      body("Password", "enter valid Password").notEmpty(),
    ],
    // error validation
    async (req, res) => {
      const error = validationResult(req);
      if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
      }
      const { Email, Password } = req.body;
      try {
        //Email checking
        let user = await User.findOne({ Email });
        if (!user) {
          success=false;
          return res.status(400).json({success, Error: "Please enter valid details !" });
        }
  
        //password chaking
        let passwordCompare = await bcrypt.compare(Password, user.Password);
        if (!passwordCompare) {
          success=false;
          return res.status(400).json({success, Error: "Please enter valid details !" });
        }
  
        const data = {
          user: {
            id: user.id,
          },
        };
  
        //   for user authantation use jwt web token
        const authToken = jwt.sign(data, JWT_SECRET);
        success=true;
        res.json({ success, authToken });
      } catch (error) {
        console.log(error);
        res.status(500).json({success,error:"Some internal server error !"});
      }
    }
  );


module.exports = router;