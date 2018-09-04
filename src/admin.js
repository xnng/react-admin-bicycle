import React, { Component } from "react";
import { Row, Col } from "antd";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NvaLeft from "./components/NvaLeft";

export class admin extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span="3">
            <NvaLeft />
          </Col>
          <Col span="21" style={{ backgroundColor: "#f1f3f5" }}>
            <Header />
            <Row>{this.props.children}</Row>
            <Footer />
          </Col>
        </Row>
      </div>
    );
  }
}

export default admin;
