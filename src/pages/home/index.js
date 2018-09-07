import React, { Component } from 'react'

export class Home extends Component {
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
        <h1>Welcome to Antd Admin</h1>
      </div>
    )
  }
}

export default Home
