import React, { Component } from "react";

export class NoMatch extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "70vh"
        }}
      >
        <h1>404 No Found</h1>
      </div>
    );
  }
}

export default NoMatch;
