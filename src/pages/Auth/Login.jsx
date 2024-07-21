import { TextField } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

function Login() {
  return (
    <div className="center p-5">
      <div className=" auth-box d-flex flex-column ">
        <h3 className="text-center mb-5">Login</h3>
        <div className="auth-input-wrapper">
          <TextField
            variant="standard"
            className="w-100  mb-1 "
            label="Email"
          />
          <EmailIcon className="auth-icon" />{" "}
        </div>
        <div>
          <Link className="float-end link-lights" to="forget">
            Forgot? 
          </Link>
        </div>
        <div className="auth-input-wrapper">
          <TextField
            variant="standard"
            className=" w-100 mb-5"
            label="Passward"
          />
          <LockIcon className="auth-icon" />
        </div>
        <Button className="bg-primary w-100" variant="contained">Login</Button>
        <p className=" text opacity-75">Already Have an Account? <span><Link className="opacity-100 link-lights" to="register">Register</Link></span> </p>
      </div>
    </div>
  );
}

export default Login;
