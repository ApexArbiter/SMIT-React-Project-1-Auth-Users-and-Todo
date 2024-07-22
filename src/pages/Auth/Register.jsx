import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

function Register() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }
    if (!userData.email.includes("@") || !userData.email.includes(".")) {
      alert("Invalid Email");
      return;
    }

    // Retrieve existing users from local storage or initialize with an empty array
    const storedUsers = JSON.parse(window.localStorage.getItem("users")) || [];

    // Add the new user to the array
    storedUsers.push(userData);

    // Save the updated array back to local storage
    window.localStorage.setItem("users", JSON.stringify(storedUsers));

    alert("User registered successfully!");
  };

  return (
    <div className="transparent center p-5">
      <div className="auth-box d-flex flex-column">
        <h3 className="text-center mb-5">Register</h3>
        <form onSubmit={handleSubmit}>
          <div className="auth-input-wrapper">
            <TextField
              variant="standard"
              className="w-100 mb-1"
              label="User Name"
              name="name"
              // value={userData.name}
              onChange={handleChange}
            />
            <PersonIcon className="auth-icon" />
          </div>
          <div className="auth-input-wrapper">
            <TextField
              variant="standard"
              className="w-100 mb-1"
              label="Email"
              name="email"
              // value={userData.email}
              onChange={handleChange}
            />
            <EmailIcon className="auth-icon" />
          </div>
          <div className="auth-input-wrapper">
            <TextField
              variant="standard"
              className="w-100 mb-5"
              label="Password"
              name="password"
              type="password"
              // value={userData.password}
              onChange={handleChange}
            />
            <LockIcon className="auth-icon" />
          </div>
          <Button className="bg-primary w-100" variant="contained" type="submit">
            Register
          </Button>
        </form>
        <p className="text opacity-75">
          Already Have an Account?{" "}
          <span>
            <Link className="opacity-100 link-lights" to="/auth/login">
              Login
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
