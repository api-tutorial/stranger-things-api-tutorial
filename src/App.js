import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Tutorial from "./Tutorial";
import Documentation from "./Documentation";
import Header from "./Header";
import Menu from "./Menu";

const App = () => (
  <div className="App">
    <Menu />
    <Router>
      <Header />
      <main>
        <Route exact path="/" component={Documentation} />
        <Route path="/docs" component={Documentation} />
        <Route path="/tutorial" component={Tutorial} />
      </main>
    </Router>
    <footer>
      <h6>
        Made by <a href="https://github.com/paigeegorry">Paige E. Gorry</a> and{" "}
        <a href="https://github.com/katedam">Kate Dameron</a> &copy;
        {`${new Date().getFullYear()}`}
      </h6>
    </footer>
  </div>
);

export default App;
