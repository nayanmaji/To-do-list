const express = require("express");
const fetchUser = require("../middleware/fatchUser");
const router = express.Router(); //routing express
const Notes = require("../models/Notes");

// ----------------------------------------update notes--------------------------------
router.put("/updatenote/:id",fetchUser,async (req, res) => {
    try {
      const { title, description, tag,activity } = req.body; //use tag
      //create new node object
      const newNode={}
    if (title) {newNode.title=title}
    if (description) {newNode.description=description}
    if (tag) {newNode.tag=tag}
    if (activity) {newNode.activity=activity}
    //Find to be note update and updated it
    let note= await Notes.findById(req.params.id)
    if (!note) {return res.status(404).send("Not found !")};
    if (note.user.toString()!==req.user.id) {return res.status(404).send("Not found !")};
    note = await Notes.findByIdAndUpdate(req.params.id,{$set:newNode},{new:true});
    res.json({note});
  } catch (error) {
    res.status(500).send("Some internal server error !");
  }
}
);

module.exports = router;