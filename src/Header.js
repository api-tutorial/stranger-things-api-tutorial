import React from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";
import "./header.css";

const Test = () => (
  <header className="container">
    <div className="centered">
      <div className="stranger-things">
        <hr />
        <div className="eighties line1">
          STRANGE<span className="last-letter">R</span>
        </div>
        <hr className="bottom-line" />
        <hr className="bottom-line right" />
        <div className="eighties line2">THINGS API</div>
      </div>
    </div>
    <Filter />
    <ul className="tabs">
      <li className="nav">
        <Link to="/docs">Documentation</Link>
      </li>
      <li className="nav">
        <Link to="/tutorial">Tutorial</Link>
      </li>
    </ul>
    <div id="set-up" className="neon-divider"></div>
  </header>
);

export default Test;
