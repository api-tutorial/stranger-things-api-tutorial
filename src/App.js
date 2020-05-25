import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";
import Tutorial from "./pages/Tutorial";
import Documentation from "./pages/Documentation";
import Title from "./title/Title";
import MobileTitle from "./title/MobileTitle";
import Menu from "./drawer/Menu";
import { Tabs, Divider } from "./components";
import { useWindowSize } from "./hooks/useWindowSize";

const App = () => {
  const isMobile = useWindowSize().width < 600;
  return (
    <div className="App">
      <Menu />
      <Router>
        <header className="container">
          {!isMobile && <Title />}
          {!isMobile && <Tabs />}
          {isMobile && <MobileTitle />}
          <Divider />
        </header>
        <main>
          <Route exact path="/" render={() => <Redirect to="/docs" />} />
          <Route path="/docs" component={Documentation} />
          <Route path="/tutorial" component={Tutorial} />
        </main>
      </Router>
      <footer>
        <h5>
          Made by <a href="https://github.com/paigeegorry">Paige E. Gorry</a>{" "}
          and <a href="https://github.com/katedam">Kate Dameron</a> &copy;
          {`${new Date().getFullYear()}`}
        </h5>
      </footer>
    </div>
  );
};

export default App;
