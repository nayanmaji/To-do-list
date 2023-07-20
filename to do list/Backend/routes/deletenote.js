const express = require("express");
const fetchUser = require("../middleware/fatchUser");
const router = express.Router(); //routing express
const Notes = require("../models/Notes");

// ----------------------------------------(3) delete notes--------------------------------
router.delete("/deletenote/:id",fetchUser,async (req, res) => {
    try {
    //Find to be note delete and delete it
    let note= await Notes.findById(req.params.id)
    if (!note) {return res.status(404).send("Not found !")};
    if (note.user.toString()!==req.user.id) {return res.status(404).send("Not found !")};
    note = await Notes.findByIdAndDelete(req.params.id);
    res.json({"success":"note has been deleted."});
  } catch (error) {
    res.status(500).send("Some internal server error !");
  }
  }
  );
  module.exports = router;