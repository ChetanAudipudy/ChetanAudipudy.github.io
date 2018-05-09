import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={200} classNames="fade">
                <Switch location={location}>
                  <Route path="/" component={Home} exact={true} />
                  <Route path="/portfolio/" component={Portfolio} />
                  <Route path="/about/" component={About} />
                  <Route path="/(contact|contact/)" component={Contact} />
                  <Route component={Home} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
