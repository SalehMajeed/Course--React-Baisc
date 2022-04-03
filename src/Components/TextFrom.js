import React, { useState } from "react";

export default function TextFrom(props) {
  const [text, setText] = useState("Enter the Text here");
  const handleUpperCase = () => {
    const newText = text.trim().toUpperCase();
    setText((prevText) => newText);
  };

  const handleLowerCase = () => {
    const newText = text.trim().toLowerCase();
    setText((prevText) => newText);
  };


  const handleOnChange = (event) => {
    setText((prevText) => event.target.value);
  };
  return (
    <>
      <div className="containter">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpperCase}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerCase}>
          Convert to LowerCase
        </button>
      </div>
      <div className='containter my-3'>
        <h1>Your Text Summary</h1>
        <p> {text.split(" ").length} words And {text.length} chareacters.</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
