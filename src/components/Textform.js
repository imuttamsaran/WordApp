import React, { useState } from "react";

export default function Textform(props) {
  let myStyle = {
    color: "#0d6efd",
  };

  const [text, setText] = useState("");
  const textChangeUp = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const textChangeLo = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const clearText = () => {
    let newText = "";
    setText(newText);
  };

  const textOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <h1 className="my-3 text-center hero">
        {props.heading}
      </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={textOnChange}
          id="exampleFormControlTextarea1"
          rows="8"
          placeholder="Enter Text Here"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={textChangeUp}>
        Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={textChangeLo}>
        Lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={clearText}>
        Clear Text
      </button>

      <h3
        className="my-3 head"
        style={{ textAlign: "center", padding: "10px", color: "white" }}
      >
        Summary
      </h3>
      <div
        className="info"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>
          <b>{text.length}</b> Character
        </span>
        <span>
          <b>{text.split(" ").length - 1}</b> Words
        </span>
      </div>
      <p className="time">
        It takes <b>{0.008 * (text.split(" ").length - 1)}</b> minuts to read entered
        text.
      </p>
      <h3
        className="my-3 head"
        style={{ textAlign: "center", padding: "10px", color: "white" }}
      >
        Preview
      </h3>
      <p
        style={{
          border: "1px solid #ced4da",
          minHeight: "250px",
          maxHeight: "400px",
          overflowY: "scroll",
        }}
        className="container"
      >
        {text}
      </p>
    </div>
  );
}
