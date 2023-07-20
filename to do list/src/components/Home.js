import '../css/home.css'
import "../css/login.css";
import React from "react";
import { hours, day } from "../js/time";

export default function Home() {
  return (
    <>
      <div className="pt-4 home login-box html body">
        <div className="text-center mt-4 pt-4">
          <h2>Good {hours()}</h2>
        </div>
        <div className="container mt-4 pt-4 text-center">
          <div className="row gx-5 mt-4 pt-4">
            <div className="col">
              <h6>Today's {day()}</h6>
              <p className='p-sz left mx-2'>{new Date().toJSON().slice(0, 10)}</p>
            </div>
            <div className="col">
              <h6>0% Done</h6>
              <p className='p-sz'>Completed Tasks</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
