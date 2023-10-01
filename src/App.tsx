/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx, css, SerializedStyles } from "@emotion/react";
// import "./App.css";

const paraStyle: SerializedStyles = css({
  color: "red",
});

function App() {
  return (
    <div className="App">
      <h2 css={{ color: "green" }}>Title</h2>
      <p css={paraStyle}>This is some text</p>
    </div>
  );
}

export default App;
