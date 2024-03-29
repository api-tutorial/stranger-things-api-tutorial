import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";
import Documentation from "./pages/Documentation";
import Title from "./title/Title";
import MobileTitle from "./title/MobileTitle";
import { Tabs, Divider } from "./components";
import { useWindowSize } from "./hooks/useWindowSize";

const App = () => {
  const isMobile = useWindowSize().width < 620;
  return (
    <div className="App">
      <Router>
        {!isMobile && (
          <header className="container">
            <Title />
            <Tabs />
            <Divider />
          </header>
        )}
        {isMobile && (
          <header className="container">
            <MobileTitle />
          </header>
        )}
        <main>
          <Route exact path="/" render={() => <Redirect to="/docs" />} />
          <Route
            exact
            path="/tutorial"
            render={() => <Redirect to="/docs" />}
          />
          <Route exact path="/docs" component={Documentation} />
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
