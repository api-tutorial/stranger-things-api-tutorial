import React, { useState } from "react";
import { Drawer } from "antd";
import MenuButton from "./MenuButton";
import "./App.css";
import "./MenuStyles.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDropDownVisible, setIsDropdownVisible] = useState(false);

  return (
    <div className="nav-drawer">
      <nav>
        <MenuButton handleClick={() => setIsVisible(true)} />
        <Drawer
          title="Menu"
          placement="left"
          destroyOnClose
          closable
          mask
          maskClosable
          keyboard
          width="265"
          onClose={() => setIsVisible(false)}
          visible={isVisible}
        >
          <ul>
            <li>
              <a href="https://www.github.com/api-tutorial/stranger-things-api">
                Source Code
              </a>
            </li>
            <li>
              <a href="/docs">Documentation</a>
            </li>
            <li className="dropdown-list">
              <button
                aria-label="tutorial sections dropdown"
                className="dropdown"
                onClick={() => setIsDropdownVisible(!isDropDownVisible)}
              >
                Tutorial
                {!isDropDownVisible && <ExpandMoreIcon />}
                {isDropDownVisible && <ExpandLessIcon />}
              </button>
              <ul
                className={
                  isDropDownVisible
                    ? "tutorial-dropdown"
                    : "tutorial-dropdown hidden"
                }
              >
                <li>
                  <a href="/tutorial/#set-up">Dependencies</a>
                </li>
                <li>
                  <a href="/tutorial/#step-1">Set up</a>
                </li>
                <li>
                  <a href="/tutorial/#step-2">Scrape Data</a>
                </li>
                <li>
                  <a href="/tutorial/#step-3">Database</a>
                </li>
                <li>
                  <a href="/tutorial/#step-4">Routes</a>
                </li>
                <li>
                  <a href="/tutorial/#step-5">Deploy!</a>
                </li>
                <li>
                  <a href="/tutorial/#step-6">Documentation</a>
                </li>
              </ul>
            </li>
            <li className="sub-nav">Resources</li>
            <li>
              <a href="https://github.com/api-tutorial/stranger-things-api">
                Stranger Things fan wiki
              </a>
            </li>
            <li>
              <a href="https://nodejs.org/en/docs/guides/getting-started-guide/">
                Nodejs
              </a>
            </li>
            <li>
              <a href="https://expressjs.com/en/starter/hello-world.html">
                Expressjs
              </a>
            </li>
            <li>
              <a href="https://docs.mongodb.com/manual/tutorial/getting-started/">
                Mongodb
              </a>
            </li>
            <li>
              <a href="https://mongoosejs.com/docs/index.html">Mongoose</a>
            </li>
            <li>
              <a href="https://devcenter.heroku.com/start">Heroku</a>
            </li>
          </ul>
        </Drawer>
      </nav>
    </div>
  );
};

export default Menu;
