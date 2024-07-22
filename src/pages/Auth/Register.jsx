import React from "react";
import { TextField } from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function Register() {
  return (
    <div className="transparent center p-5">
      <div className="auth-box d-flex flex-column">
        <h3 className="text-center mb-5">Register</h3>
        <div className="auth-input-wrapper">
          <TextField variant="standard" className="w-100 mb-1" label="User Name" />
          <PersonIcon className="auth-icon" />
        </div>
        <div className="auth-input-wrapper">
          <TextField variant="standard" className="w-100 mb-1" label="Email" />
          <EmailIcon className="auth-icon" />
        </div>
        
        
        <div className="auth-input-wrapper">
          <TextField
            variant="standard"
            className="w-100 mb-5"
            label="Password"
          />
          <LockIcon className="auth-icon" />
        </div>
        <Button className="bg-primary w-100" variant="contained">
          Login
        </Button>
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
