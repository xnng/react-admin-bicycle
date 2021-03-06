import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/home/";
import Admin from "../layouts/admin";
import Buttons from "../pages/ui/buttons";
import NoMatch from "../pages/noMatch";
import Modals from "../pages/ui/modals";
import Loadings from "../pages/ui/loading";
import Notifications from "../pages/ui/notifications";
import Messages from '../pages/ui/messages';
import Tabs from '../pages/ui/tabs';
import FormLogin from '../pages/form/login';
import FormReg from '../pages/form/register';
import BasicTable from '../pages/table/basicTable'

export class Routes extends Component {
  render() {
    return (
      <Router>
        <Admin>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/home" component={Home} /> */}
            <Route path="/ui/buttons" component={Buttons} />
            <Route path="/ui/modals" component={Modals} />
            <Route path="/ui/loadings" component={Loadings} />
            <Route path="/ui/notification" component={Notifications} />
            <Route path="/ui/messages" component={Messages} />
            <Route path="/ui/tabs" component={Tabs} />
            <Route path="/form/login" component={FormLogin} />
            <Route path="/form/reg" component={FormReg} />
            <Route path="/table" component={BasicTable} />
            <Route component={NoMatch} />
          </Switch>
        </Admin>
      </Router>
    );
  }
}

export default Routes;
