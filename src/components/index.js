import React from "react";

export const Tabs = () => (
  <ul className="tabs">
    <li className="tab">Documentation</li>
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
