import React from "react";
import ReactDOM from "react-dom";

import App from "./app.js";

import "./styles/index.scss";

import formData from "data/formData.js";

window.formData = formData;

ReactDOM.render(
  <App />,
  document.getElementById("unique1")
);
