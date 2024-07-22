import React from "react";

export default function Button({  style, size, text }) {
  return (
    <div  className={`btn btn-${style} btn-${size} `}>
      {text}
    </div>
  );
}
