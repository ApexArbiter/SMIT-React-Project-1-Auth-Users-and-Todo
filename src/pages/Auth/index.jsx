import React from "react";
import { Route, Routes } from "react-router-dom";
import ForgetPassward from "./ForgetPassward";
import Login from "./Login";
import Register from "./Register";
import video from "../../assets/video/auth-video.mp4";

function Auth() {
  return (
    <div className="auth">
      <video className="video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget" element={<ForgetPassward />} />
        <Route path="*" element={<h1>NotFound</h1>} />
      </Routes>
    </div>
  );
}

export default Auth;
