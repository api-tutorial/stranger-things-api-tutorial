import React, { useState } from "react";
import { Drawer } from "antd";
import MenuButton from "./MenuButton";
import "./App.css";
import "./MenuStyles.css";
// import "antd/es/drawer/style/css";

const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);

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
            <li>
              <a href="/tutorial">Tutorial</a>
              <ul>
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
              <a href="">Stranger Things fan wiki</a>
            </li>
            <li>
              <a href="">Nodejs</a>
            </li>
            <li>
              <a href="">Expressjs</a>
            </li>
            <li>
              <a href="">Mongodb</a>
            </li>
            <li>
              <a href="">Mongoose</a>
            </li>
            <li>
              <a href="">Heroku</a>
            </li>
          </ul>
        </Drawer>
      </nav>
    </div>
  );
};

export default Menu;
