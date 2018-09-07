import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/home/";
import Admin from "../layouts/admin";
import Buttons from "../pages/ui/buttons";
import NoMatch from "../pages/noMatch";
import Modals from '../pages/ui/modals';

export class Routes extends Component {
  render() {
    return (
      <Router>
        <Admin>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/ui/buttons" component={Buttons} />
            <Route path="/ui/modals" component={Modals} />
            <Route component={NoMatch} />
          </Switch>
        </Admin>
      </Router>
    );
  }
}

export default Routes;
