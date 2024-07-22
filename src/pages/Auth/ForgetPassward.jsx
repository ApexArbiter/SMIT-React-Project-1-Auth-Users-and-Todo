import { TextField } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
function ForgetPassward() {
  return (
    <div className="transparent center p-5">
      <div className="auth-box d-flex flex-column">
        <h3 className="text-center mb-5">Forgot Passward</h3>
        <div className="auth-input-wrapper">
          <TextField
            variant="standard"
            className="w-100 mb-1"
            label="Email"
          />
          <EmailIcon className="auth-icon" />
        </div>
      
        
        <Button className="bg-primary w-100 mt-5 mb-2" variant="contained">Verify</Button>
        <p className="text opacity-75">Not Have an Account? <span><Link className="opacity-100 link-lights" to="/auth/register">Register</Link></span></p>
      </div>
    </div>
  )
}

export default ForgetPassward