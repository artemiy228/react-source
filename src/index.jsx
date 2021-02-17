import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

/* <-- Dialogs -->*/
let infoPosts = [
  {message: "Hi, how are you?", likeCount: 12},
  {message: "Hi, my name is Dmitriy", likeCount: 5},
  {message: "Hello my friend your mum is ded", likeCount: 31}
]
const dialogNameMessages = [
  { message: 'Hello', name: 'Valera', id: 1} ,
  { message: 'Hello', name: 'Nikita', id: 2} ,
  { message: 'Hello', name: 'Artem', id: 3} ,
  { message: 'Hello', name: 'Dmitriy', id: 4} ,
  { message: 'Hello', name: 'Valera', id: 5}
]
let infoData = [
  {name: 'Ashot',  id: 1},
  {name: 'Viktor', id: 2},
  {name: 'Nikita', id: 3}
]
/* <-- Dialogs --> */
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App infoPosts={infoPosts} dialogNameMessages={dialogNameMessages} infoData={infoData}/>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
