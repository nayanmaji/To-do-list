import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Alert from "./components/Alert";
import AddNote from "./components/AddNote";
import AllNote from "./components/AllNote";
import NoteState from "./context/Notes/NoteState";
import React, { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <NoteState>
        <BrowserRouter>
          <div className="cls">
            <NavBar />
            <Alert alert={alert} />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route
                exact
                path="/Login"
                element={<Login showAlert={showAlert} />}
              />
              <Route
                exact
                path="/SignUp"
                element={<SignUp showAlert={showAlert} />}
              />
              <Route
                exact
                path="/AddNote"
                element={<AddNote showAlert={showAlert} />}
              />
              <Route
                exact
                path="/AllNote"
                element={<AllNote showAlert={showAlert} />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
