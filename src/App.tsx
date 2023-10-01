/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx, css, SerializedStyles } from "@emotion/react";
import "./App.css";

const paraStyle: SerializedStyles = css({
  color: "red",
  marginTop: 10,
  marginLeft: 10,
  marginRight: 10,
});

function App() {
  return (
    <div className="App">
      <h2 css={{ color: "green", textAlign: "center" }}>Title</h2>
      <p css={paraStyle}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
        elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
        est Lorem ipsum dolor sit amet.
      </p>
    </div>
  );
}

export default App;
