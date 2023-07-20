import React, { useContext } from "react";
import NoteContext from "../context/Notes/NoteContext";

export default function NoteItem(props) {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div>
      
    </div>
  )
}
