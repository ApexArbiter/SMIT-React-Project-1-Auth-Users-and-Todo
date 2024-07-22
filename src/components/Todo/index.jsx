import React, { useState } from "react";
import Input from "../Input";
import Output from "../Output";
import Nav from "../Nav";
import Heading from "../Heading";
import Button from "../Button";

export default function Todo() {
  const [input, setInput] = useState()
  return (
    <>
      <Nav />
      <div  className="card p-md-4 mx-auto mt-5" style={{ maxWidth: 500 }}>
        <Heading text={"My Todos"} />
        <Input onInput={setInput} />
        <Button input={input} style="secondary" size="" text="Add Todo" />
      </div>
      <Output />
    </>
  );
}
