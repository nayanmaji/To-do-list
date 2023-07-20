import "../css/home.css"
// import "../js/NoteJs"
import React, { useContext } from "react";
import NoteContext from "../context/Notes/NoteContext";

export default function Note(props) {
    const context = useContext(NoteContext);
    const { deleteNote } = context;
    const { note } = props;
    // console.log(note)
    // if (note.activity===false) {
  return (
    <>
      <div className="col-md-3 ">
        <div className="card my-3">
          <div className="card-body">
            <div className="d-flex">
              <h4 className="card-title"><b>{note.title}   </b>     <button type="button" className="btn btn-dark btn-sm disabled">  {note.tag}</button></h4>
            </div>

            <p className="card-text">{note.description}</p>
            <i
                className="fa-solid fa-trash mx-2 d-flex flex-row-reverse"
                onClick={() => {
                  deleteNote(note._id);
                  props.showAlert("success","Delete Note successfully",)
                }}
              ></i>
          </div>
        </div>
      </div>
    </>
  )
}
// }