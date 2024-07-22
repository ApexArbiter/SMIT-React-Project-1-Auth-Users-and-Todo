import React from "react";
import { Routes, Route } from "react-router-dom";
import Fronted from "./Fronted";
import Auth from "./Auth";
import Logged from './Logged'
function Index() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Fronted />} />
        <Route path="auth/*" element={<Auth/>}/>
        <Route path="logged/*" element={<Logged/>}/>
      </Routes>
    </>
  );
}

export default Index;
