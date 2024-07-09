// text is the initial text = "enter text here"
// setText is the modified text, used to store value when the onclick event is clicked and text is modified
// useState must be imported to use the state method. ususally known as hook
// hook was invented for us to use state and other react features without writing a class component. made for functional component.

import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  //on change is necessary as it helps to write on the text area
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        <button className="div div-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button className="div div-primary mx-3" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
      </div>

      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read </p>
        <h1>Preview</h1>
        <p>{text}</p>
      </div>
    </>
  );
}
