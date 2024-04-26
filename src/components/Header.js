import React from "react";
import fireInsuranceGif from "./assets/fire-insurance.gif";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
      <div className="container-fluid">
        <a class="navbar-brand m-2" href="#">
          <img
            src={fireInsuranceGif}
            alt="Fire Insurance"
            width="40"
            height="40"
            className="d-inline-block align-text-center"
          />
          ATaS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/products">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/aboutus">
                About Us
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn btn-outline-success me-3">Sign Up</button>
            <Link to={'/login'}>
             <button className="btn btn-outline-primary">Log In</button>
             </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
