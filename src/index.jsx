import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

let infoPost = [
  {message: "Hi, how are you?", likeCount: 12},
  {message: "Hi, my name is Dmitriy", likeCount: 5},
  {message: "Hello my friend your mum is ded", likeCount: 31}
]

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App infoPost={infoPost} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
