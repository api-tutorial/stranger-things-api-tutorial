import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";
import Tutorial from "./pages/Tutorial";
import Documentation from "./pages/Documentation";
import Title from "./title/Title";
import Menu from "./drawer/Menu";
import { Tabs, Divider } from "./components";

const App = () => (
  <div className="App">
    <Menu />
    <Router>
      <header className="container">
        <Title />
        <Tabs />
        <Divider />
      </header>
      <main>
        <Route exact path="/" render={() => <Redirect to="/docs" />} />
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
