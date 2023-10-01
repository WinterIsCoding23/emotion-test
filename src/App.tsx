/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/react";
// import "./App.css";

const paraStyle = css({
  color: "red",
});

function App() {
  return (
    <div className="App">
      <p css={paraStyle}>This is some text</p>
    </div>
  );
}

export default App;
