import "../css/login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login(props) {
  const [credentials, setcredentials] = useState({
    Email: "",
    Password: "",
  });

  let history = useNavigate();
const onSubmit = async(events) => {
    events.preventDefault();
    const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Email: credentials.Email,
          Password: credentials.Password,
        }),
      });
      const json = await response.json();
      setcredentials({ Email: "", Password: "" });
      //redirect note page
      if (json.success) {
        localStorage.setItem("token", json.authToken);
        history("/AllNote");
        props.showAlert("success", "Login successfully");
      } else {
        props.showAlert("danger", "Invalid input");
      }
  }

  
const onChange = (events) => {
    setcredentials({ ...credentials, [events.target.name]: events.target.value });
  };
  return (
    <>
      <div className="login-box html body">
        <h2>Login</h2>
        <form onSubmit={onSubmit}>
          <div className="user-box">
            <input type="text" id="Email" name="Email" value={credentials.Email} onChange={onChange} />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="password" id="Password" name="Password" value={credentials.Password} onChange={onChange}/>
            <label>Password</label>
          </div>
          
          <button type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
