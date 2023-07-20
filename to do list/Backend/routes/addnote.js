const express = require("express");
const router = express.Router(); 
const fetchUser = require("../middleware/fatchUser");
const { body, validationResult } = require("express-validator"); 
const Notes = require("../models/Notes");
// const User = require("../models/User"); 

router.post(
    "/addnote",
    fetchUser,
    [
      body("title", "enter valid title").notEmpty(),
      body("description", "enter valid description").notEmpty(),
    ],
    // error validation
    async (req, res) => {
      // try {
        const { title, description, tag,activity } = req.body; //use tag
        const error = validationResult(req);
        if (!error.isEmpty()) {
          return res.status(400).json({ error: error.array() });
        }
        //data entry
        const note = new Notes({
          title,
          description,
          tag,
          activity,
          user: req.user.id,
        });
        const saveNote = await note.save(); //note save
        res.json(saveNote);
      // } catch (error) {
      //   res.status(500).send("Some internal server error !");
      // }
    }
  );

module.exports = router;