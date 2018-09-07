import React from "react";
import ReactDOM from "react-dom";
import Routes from "./config/routes";
import "./index.less";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Routes />, document.getElementById("root"));
registerServiceWorker();
