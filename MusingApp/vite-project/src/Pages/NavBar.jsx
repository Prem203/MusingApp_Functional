import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../Styles/NavBar.css";
import "../Styles/Header.css";


export default class NavBar extends Component {
  render() {
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
        </nav>

        <div className='line'></div>

      </>
    );
  }
}
