import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve users from local storage
    const storedUsers = JSON.parse(window.localStorage.getItem("users")) || [];

    // Find user with matching email and password
    const user = storedUsers.find(
      (user) => user.email === loginData.email && user.password === loginData.password
    );

    if (user) {
      alert("Login successful!");
      // Navigate to the home page or dashboard
      navigate("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="transparent center p-5">
      <div className="auth-box d-flex flex-column">
        <h3 className="text-center mb-5">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="auth-input-wrapper">
            <TextField
              variant="standard"
              className="w-100 mb-1"
              label="Email"
              name="email"
              value={loginData.email}
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
              value={loginData.password}
              onChange={handleChange}
            />
            <LockIcon className="auth-icon" />
          </div>
          <Button className="bg-primary w-100" variant="contained" type="submit">
            Login
          </Button>
        </form>
        <p className="text opacity-75">
          Don't have an account?{" "}
          <span>
            <Link className="opacity-100 link-lights" to="/auth/register">
              Register
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
