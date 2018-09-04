import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Login from "../pages/login";
import Admin from '../admin'

export class Routers extends Component {
  render() {
    return (
      <Router>
        <App>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Admin} />
          {/* <Route path="/" component="" /> */}
        </App>
      </Router>
    );
  }
}

export default Routers;
