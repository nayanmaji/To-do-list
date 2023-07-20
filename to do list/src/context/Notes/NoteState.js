import React, { useState } from "react";
import NoteContext from "./NoteContext";
// import { json } from "react-router-dom";

export default function NoteState(props) {
  const host = "http://localhost:5000";
  const notesIntl = [];
  const [notes, setNotes] = useState(notesIntl);

  //get all notes
  const getallNote = async () => {
    //api call
    const response = await fetch(`${host}/api/getnote`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    
    setNotes(json);
  };
  //Add note
  const addNote = async (title, description, tag) => {
    //api call
    const response = await fetch(`${host}/api/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  };
  // Delete Note
  const deleteNote = async (id) => {
    //api call
    const response = await fetch(`${host}/api/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setNotes(json);

    //delete note logic
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //Edit Note
  const editddNote = async (id, title, description, tag) => {
    //api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    console.log(json);

    //edit note logic
    let newNote = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < notes.length; index++) {
      const element = newNote[index];
      if (element._id === id) {
        newNote[index].title = title;
        newNote[index].description = description;
        newNote[index].tag = tag;
        break;
      }
    }
    setNotes(newNote);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editddNote, getallNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
}
