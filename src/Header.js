import React from "react";
import "./App.css";
import Filter from "./Filter";

const Header = () => (
  <div className="centered">
    <header className="title">
      <hr />
      <div className="eighties line1">
        S<span className="flicker-fast">T</span>
        <span className="flicker-slow">R</span>
        ANGE<span className="last-letter">R</span>
      </div>
      <hr className="bottom-line" />
      <hr className="bottom-line right" />
      <div className="eighties line2">
        THI
        <span className="flicker-fast">N</span>GS
        <span className="flicker-slow"> A</span>
        PI
      </div>
      <Filter />
    </header>
  </div>
);

export default Header;
