import "../css/home.css";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "../context/Notes/NoteContext";
import Note from "./Note";

export default function AllNote(props) {
  let history = useNavigate();
  const context = useContext(NoteContext);
  const { notes, getallNote } = context;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getallNote();
    } else {
      history("/Login");
    }
    // eslint-disable-next-line
  }, []);
  console.log(notes)
  // console.log(notes.map((note) => {
  //   return ((note.activity ==="true"     )?
  //     <Note key={note._id} note={note} showAlert={props.showAlert} />:""
  // )
  // }));
  return (
    <div className="container">
      <div className="row my-3 container">
        <h2 className="h2text my-3">Your Notes</h2>
        <div className="container my-3">
          {notes.length === 0 && "Hase not any notes"}
        </div>

        {notes.map((note) => {
          return (
            <Note key={note._id} note={note} showAlert={props.showAlert} />
          );
        })}
      </div>
    </div>
  );
}
