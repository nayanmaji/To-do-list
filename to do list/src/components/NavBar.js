import React from "react";
import { Link,useLocation,useNavigate } from 'react-router-dom'

export default function NavBar() {
  let history = useNavigate();
  const onclicklogout =()=>{
    localStorage.removeItem('token')
    history('/Login')
  }
  let location = useLocation();

  React.useEffect(() => {
    // console.log(location.pathname)
  }, [location]);
  return (
    <><nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname==='/'?"active":''}`} aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname==='/AddNote'?"active":''}`} to="/AddNote">
              Add New Note
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname==='/AllNote'?"active":''}`} to="/AllNote">
              Your Notes
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname==='/AddNote'?"active":''}`} to="/AddNote">
              About
            </Link>
          </li>
        </ul>
         {!localStorage.getItem('token')?
        <form className="d-flex" >          
        <Link className="btn btn-dark mx-1 btn-sm" to="/Login" role="button">Login</Link>
        <Link className="btn btn-dark mx-1 btn-sm" to="/SignUp" role="button">Sign Up</Link>
        </form>:<button type="button" onClick={onclicklogout} className="btn btn-dark mx-1 btn-sm">Logout</button>}
      </div>
    </div>
  </nav>
    </>
  );
}
