const express = require("express");
const router = express.Router(); 
const fetchUser = require("../middleware/fatchUser");
const Notes = require("../models/Notes");


router.get("/getnote", fetchUser, async (req, res) => {
    try {
      const notes = await Notes.find({ user: req.user.id });
      res.json(notes);
      // console.log(res.json(notes))
    } catch (error) {
      res.status(500).send("Some internal server error !");
    }
  });

module.exports = router;