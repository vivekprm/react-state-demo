import React from "react";
import { Route, Redirect, Switch, NavLink } from "react-router-dom";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import Example from "./Example";
import CoursePage from "./CoursePage";
import PageNotFound from "./NotFoundPage";

function App() {
  /**
   * This solution works. But it hits server
   */
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/example"
            >
              Example
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/courses"
            >
              Courses
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Redirect from="/about-page" to="about" />
        <Route path="/example" component={Example} />
        <Route path="/courses" component={CoursePage} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
