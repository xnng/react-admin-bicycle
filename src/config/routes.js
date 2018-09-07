import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Room from "../pages/room";
import Admin from "../layouts/admin";

export class Routes extends Component {
  render() {
    return (
      <Router>
          <Admin>
            <Route exact path="/" component={Room} />
            <Route path="/home" component={Room} />
          </Admin>
      </Router>
    );
  }
}

export default Routes;
