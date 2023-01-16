import React from "react";
import { NavLink } from "react-router-dom";

export const Tabs = () => (
  <ul className="tabs">
    <li className="tab">
      <NavLink to="/docs" activeClassName="active">
        Documentation
      </NavLink>
    </li>
    {/* <li className="tab">
      <NavLink to="/tutorial" activeClassName="active">
        Tutorial
      </NavLink>
    </li> */}
  </ul>
);

export const Divider = ({ flickerSpeed = "", id = "" }) => (
  <div id={id} className={`neon-divider flicker-${flickerSpeed}`}></div>
);

export const CodeBlock = ({ code }) => (
  <div className="code-block">
    <pre>
      <code>{code}</code>
    </pre>
  </div>
);
