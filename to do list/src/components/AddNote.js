import "../css/AddNote.css";
import React, { useContext,useState, useEffect} from 'react'
import NoteContext from "../context/Notes/NoteContext";
import { useNavigate } from 'react-router-dom';

export default function AddNote(props) {
  let history = useNavigate();
    const context = useContext(NoteContext);
    const { getallNote } = context;
    useEffect(() => {
      if (localStorage.getItem('token')) {
        getallNote();
      }
      else{
        history('/Login')
      } 
      // eslint-disable-next-line   
    }, []);
  const { addNote } = context;
  const [note,setNote]=useState({title:"", description:"", tag:""});
  const handleClick=(e)=>{
    e.preventDefault()
    addNote(note.title,note.description,note.tag)
    setNote({title:"", description:"", tag:""})
    props.showAlert("success","Add note successfully",)
  }
  const onChange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value})
  }
  return (
      <form className="form">
        <input className="input" id="input-1" type="text" placeholder=" Title " name="title" onChange={onChange} autoFocus
            value={note.title} required />
        <label className="label" htmlFor="input-1">
          <span className="label-text span">ENTER YOUR TITLE</span>
          <span className="nav-dot span"></span>
          <div className="signup-button-trigger">ADD NOTE</div>
        </label>
        <input className="input" id="input-2" type="text" placeholder="Description" name="description" onChange={onChange}
            value={note.description} required />
        <label className="label" htmlFor="input-2">
          <span className="label-text span">ENTER YOUR DESCRIPTION</span>
          <span className="nav-dot span"></span>
        </label>
        <input className="input" id="input-3" type="text" placeholder="Tag" value={note.tag}
            name="tag"
            onChange={onChange}/>
        <label className="label" htmlFor="input-3">
          <span className="label-text span">ENTER YOUR TAG</span>
          <span className="nav-dot span"></span>
        </label>
        <button className="button" type="submit " onClick={handleClick}>ADD NOTE</button>
        <p className="tip p">Press Tab</p>
        <div className="signup-button div">ENTER YOUR TITLE</div>
      </form>
  );
}
