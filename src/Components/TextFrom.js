import React, {useState} from "react";

export default function TextFrom(props) {
const [text, setText] = useState('Enter the Text here');
const handleUpperCase = () => {
    const newText = text.trim().toUpperCase();
    setText(prevText => newText)
}
const handleOnChange = (event) => {
    setText(prevText =>  event.target.value)
}
  return (
    <>
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
      <button className="btn btn-primary" onClick={handleUpperCase}>Convert to UpperCase</button>
    </>
  );
}
