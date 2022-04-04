import React, { useState } from "react";

export default function TextFrom(props) {
  const [text, setText] = useState("");
  const handleUpperCase = () => {
    const newText = text.trim().toUpperCase();
    setText((prevText) => newText);
  };

  const handleLowerCase = () => {
    const newText = text.trim().toLowerCase();
    setText((prevText) => newText);
  };

  const handleClear = () => {
    setText((prevText) => "");
  };

  const handleOnChange = (event) => {
    setText((prevText) => event.target.value);
  };

  const handleCopy = () => {
    const text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpace = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  return (
    <>
      <div
        className="containter"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpperCase}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerCase}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
      </div>
      <div
        className="containter my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {" "}
          {text.split(" ").length} words And {text.length} characters.
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
