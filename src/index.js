import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "react-dom";
import App from "./components/App";

// First argument is the component we want to render, second argument is target where
// we want to render.
render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
