import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function Nav() {
  const { loggedIn, setLoggedIn, username } = useContext(AuthContext);

  const handleLoginClick = () => {
    setLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setLoggedIn(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary d-flex align-items-center justify-content-between ">
        <Link to="/" className="navbar-brand">
          Rynexi
        </Link>

        <div className="">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className=" ">
          <p className="text-light ">
            {loggedIn ? `Hello, ${username}` : ""}
          </p>
          
          {loggedIn ? (
            <button onClick={handleLogoutClick} className="btn btn-danger">
              Logout
            </button>
          ) : (
            <button onClick={handleLoginClick} className="btn btn-success">
              Login
            </button>
          )}
          
        </div>
      </nav>
    </>
  );
}
