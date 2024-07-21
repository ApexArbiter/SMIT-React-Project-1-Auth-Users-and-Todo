import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"

function index() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<h1>Page not</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default index;