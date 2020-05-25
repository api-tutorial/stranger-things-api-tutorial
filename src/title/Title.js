import React from "react";
import Filter from "./Filter";
import "./title.css";

const Title = () => (
  <>
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
  </>
);

export default Title;
