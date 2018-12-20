import React from "react";
import ReactDOM from "react-dom";
import App from "Components/App/";
import { createGlobalStyle  } from "styled-components";
import reset from "styled-reset";
import "./typography";

export const GlobalStyle = createGlobalStyle`
  html {
    background: red;
  }
`

ReactDOM.render(<App />, document.getElementById("root"));