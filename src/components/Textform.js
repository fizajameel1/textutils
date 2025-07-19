import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Converted to Upper Case",'success')
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Converted to Lower Case",'success')
  };

  const handleClClick = () => {
    setText("");
    props.showalert("Text Cleared",'success')
  };

  const handleVowClick = (text) => {
    const matches = text.match(/[aeiouAEIOU]/g);
    return matches ? matches.length : 0;
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black'
            }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick} disabled={text.length === 0}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick} disabled={text.length === 0}>
          Convert to Lower Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClClick} disabled={text.length === 0}>
          Clear Text
        </button>
      </div>

      <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your text Summary</h2>
        <p>
          {text.trim() === '' ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters
        </p>
        <p>{0.008 * (text.trim() === '' ? 0 : text.trim().split(/\s+/).length)} Minutes read</p>
        <p>Total Vowels: {handleVowClick(text)}</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Nothing to preview.'}</p>
      </div>
    </>
  );
}
