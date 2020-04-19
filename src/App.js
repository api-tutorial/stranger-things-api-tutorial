import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Tutorial from "./Tutorial";
import Documentation from "./Documentation";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <nav>
          <ul>
            <li className="nav">
              <Link to="/docs">Documentation</Link>
            </li>
            <li className="nav">
              <Link to="/tutorial">Tutorial</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Route exact path="/" component={Documentation} />
          <Route path="/docs" component={Documentation} />
          <Route path="/tutorial" component={Tutorial} />
        </main>
      </Router>
      <footer>
        <h6>
          Made by <a href="https://github.com/paigeegorry">Paige E. Gorry</a>{" "}
          and <a href="https://github.com/katedam">Kate Dameron</a> &copy;
          {`${new Date().getFullYear()}`}
        </h6>
      </footer>
    </div>
  );
}

export default App;
