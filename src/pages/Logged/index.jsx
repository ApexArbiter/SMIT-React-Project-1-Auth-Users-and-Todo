import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Main from "./Main";
import Todo from "./Todo";
import Users from "./Users";
function Index() {
  return (
    <>
      <Nav />
      <div className="main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="users" element={<Users />} />
          <Route path="todo" element={<Todo />} />
          <Route path="*" element={<h1>Page not</h1>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default Index;
