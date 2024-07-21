import React from "react";
import { Route, Routes } from "react-router-dom";
import ForgetPassward from "./ForgetPassward";
import Login from "./Login";
import Register from "./Register";

function Auth() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Forget" element={<ForgetPassward />} />
        <Route path="*" element={<h1>NotFound</h1> } />
      </Routes>
    </>
  );
}

export default Auth;
