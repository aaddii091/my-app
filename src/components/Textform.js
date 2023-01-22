import React, { useState } from "react";
import Textfor from "./Textform.css";

export default function Textform(props) {
  const convert = () => {
    setText("button has been clicked , text is being rendered ........ ");
    let newt = text.toUpperCase();
    setText(newt);
  };
  const convertl = () => {
    let lower = text.toLowerCase();
    setText(lower);
  };
  const change = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <h2>{props.header}</h2>
      <div>
        <textarea
          name="text"
          id="text"
          rows="15"
          cols="130"
          value={text}
          placeholder="Enter Text Here ..."
          onChange={change}
        ></textarea>
      </div>
      <div className="bbtn">
        <button className="k" onClick={convert}>
          Convert UCL
        </button>
        <button className="k" onClick={convertl}>
          Convert LCL
        </button>
      </div>
      <div className="sum">
        <h3>Text Summary</h3>
        <h6>
          {text.split(" ").length} words & {text.length} characters
        </h6>
      </div>
    </>
  );
}
