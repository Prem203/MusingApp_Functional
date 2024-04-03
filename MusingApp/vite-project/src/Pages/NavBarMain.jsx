import React from 'react';
import { Link } from "react-router-dom";
import "../Styles/NavBar.css";
import "../Styles/Header.css";


export default function NavBar() {
    console.log("NavBar");
    return (
      <>
        <nav className="navbar">
          <div className="d-flex justify-content-between">
            <ul className="list-unstyled d-flex">
              <li className="me-3">
              <Link to="/profile">Profile</Link>
              </li>
              <li className="me-3"> 
              <Link to="/saved">Saved</Link>
              </li>
              <li className="me-3">
              <Link to="/post">Post</Link>
              </li>
            </ul>
          </div>
          <div className='logout'>
            <Link to="/">
                <button type="button" className="btn btn-danger">
                    Logout
                </button></Link>
          </div>
        </nav>

        <div className='line'></div>

      </>
    );
  }
