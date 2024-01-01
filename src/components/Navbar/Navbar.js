import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import './assets/css/Navbar.css'; // Import the CSS from styles.css file
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/home">
          <b className="Name"> RBL-04 | Final Year Project </b> <b className="Name"> | </b>
        </NavLink>
        <button className="navbar-toggler navbutton" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <div className="navbar-nav navbar-brand">
            <NavLink className="nav-link" to="/home">HOME</NavLink>
            <NavLink className="nav-link" to="/form-input">FORM INPUT</NavLink>
            <NavLink className="nav-link" to="/form-result">FORM RESULT</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;