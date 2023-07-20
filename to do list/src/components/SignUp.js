import "../css/login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp(props) {
  const [credentials,setcredentials]=useState({Name:"",Email:"",Password:""});
    let history = useNavigate();
  const onSubmit = async (e) => {
    const {Name,Email, Password}=credentials;
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({Name,Email, Password}),
    });
    const json = await response.json();
    setcredentials({Name:"",Email:"",Password:""})
    //redirect note page
    if (json.success) {
      localStorage.setItem('token', json.authToken);
      history("/")
      props.showAlert("success","Account created successfully",)
  }
  else{
      props.showAlert("danger","Invalid input !")
  }
  };
  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="login-box">
        <h2>Sign Up</h2>
        <form onSubmit={onSubmit}>
          <div className="user-box">
            <input type="text" id="Name" name="Name" value={credentials.Name} onChange={onChange} />
            <label>Name</label>
          </div>
          <div className="user-box">
            <input type="email" id="Email" name="Email" value={credentials.Email} onChange={onChange}/>
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
  )
}
