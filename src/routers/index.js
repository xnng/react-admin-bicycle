import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Login from "../pages/login";
import Admin from "../admin";
import Home from "../pages/home";
import Buttons from "../pages/ui/buttons";
import FormLogin from '../pages/form/login';

export class Routers extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/login" component={Login} />
          <Route
            path="/"
            render={() => (
              <Admin>
                <Route path="/ui/buttons" component={Buttons} />
                <Route path="/home" component={Home} />
                <Route path="/form/login" component={FormLogin} />
                {/* <Route component={NoMatch} /> */}
              </Admin>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default Routers;
