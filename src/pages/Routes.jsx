import React from "react";
import { Routes, Route } from "react-router-dom";
import Fronted from "./Fronted";
import Auth from "./Auth";

function Index() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Fronted />} />
        <Route path="auth/*" element={<Auth/>}/>
      </Routes>
    </>
  );
}

export default Index;
