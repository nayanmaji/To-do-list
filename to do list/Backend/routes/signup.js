const express = require("express");
const router = express.Router(); 
const User = require("../models/User");
const { body, validationResult } = require("express-validator"); //(express validation site)
const bcrypt = require("bcryptjs"); //module enables storing passwords as hashed passwords instead of plaintext.
const jwt = require("jsonwebtoken"); //jwt node js (web token,use for user verifection)

const JWT_SECRET = "abc@#lkj";
// ------------------------------create new user---------------------------
//required subject
router.post(
    "/signup",
    [
      body("Name", "enter valid name").notEmpty(),
      body("Email", "enter valid Email").isEmail(),
      body("Password", "enter valid Password").isLength({ min: 5 }),
    ],
    // error validation
    async (req, res) => {
      const error = validationResult(req);
      if (!error.isEmpty()) {
        success=false;
        return res.status(400).json({success, error: error.array() });
      }
  
      // chack unic user(express validation site)
      try {
        let user = await User.findOne({ Email: req.body.Email });
        if (user) {
          success=false;
          return res.status(400).json({success, error: "That email address is already registered. You sure you don\'t have an account?" });
        }
  
        const salt = await bcrypt.genSaltSync(10);
        const secPass = bcrypt.hashSync(req.body.Password, salt);
        // create new user
        user = await User.create({
          Name: req.body.Name,
          Email: req.body.Email,
          Password: secPass,
        });
        const data = {
          user: {
            id: user.id,
          },
        };
  
        //   for user authantation use jwt web token
        const authToken = jwt.sign(data, JWT_SECRET);
        success=true;
        res.json({success, authToken });
      } catch (error) {
        success=false;
        res.status(500).json({success,error:"Some internal server error !"});
      }
    }
  );


  module.exports = router;