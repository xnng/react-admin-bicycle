import React from "react";
import ReactDOM from "react-dom";
import Routes from "./config/routes";
import "./index.less";
import registerServiceWorker from "./registerServiceWorker";

if (module.hot) {
  module.hot.accept("./config/routes", () => {
    ReactDOM.render(<Routes />, document.getElementById("root"));
  });
}

ReactDOM.render(<Routes />, document.getElementById("root"));
registerServiceWorker();