import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  bg-primary">
        <Link to="/" className="navbar-brand">
          Basic React
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="blog">
                Blog
              </Link>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Auth
              </button>

              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <link to></link>
                <Link className="dropdown-item" to="/auth/login">
                  Login
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/auth/register">
                  Register
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
