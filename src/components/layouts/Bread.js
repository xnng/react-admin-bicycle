import React, { Component } from "react";
import { Breadcrumb } from "antd";

export class Bread extends Component {
  render() {
    return (
      <Breadcrumb style={{ marginTop: 16, marginBottom: 16}}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}

export default Bread;