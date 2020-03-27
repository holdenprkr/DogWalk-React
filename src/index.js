import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom"
import DogWalk from "./components/DogWalk"

ReactDOM.render(
  <>
    <Router>
      <DogWalk />
    </Router>
  </>
    , document.getElementById("root"))
