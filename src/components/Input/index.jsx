import React, { useState } from "react";

export default function Input({ onInput }) {
  let initialValue = { title: "", description: "" };

  let [change, setChange] = useState(initialValue);
  let [todos, setTodos] = useState({});

  // const handleSubmit = (e) => {
  //   console.log("BUTTON Was Clicked");
  //   setTodos((prevTodos) => ({ ...prevTodos, [change.title]: change }));
  //   setChange(initialValue);
  // };
  const handleChange = (e) => {
    onInput((s) => ({ ...s, [e.target.name]: e.target.value }));
    console.log(e.target.name);
    console.log(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Title"
        name="title"
        className="form-control mb-3"
        onChange={handleChange}
      />
      <textarea
        type="text"
        placeholder="Description"
        name="description"
        className="form-control mb-3"
        onChange={handleChange}
      />
    </>
  );
}
