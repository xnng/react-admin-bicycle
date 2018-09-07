import { Layout, Icon } from "antd";
import React, { Component } from "react";
import "./admin.less";
import Constants from "../config/constants";
import MySider from "../components/layouts/Sider";
import MyHeader from "../components/layouts/Header";
import Bread from "../components/layouts/Bread";

const { Header, Content, Footer } = Layout;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false
    };
  }
 
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout className="layout">
        <MySider collapsed={this.state.collapsed} />
        <Layout>
          <Header className="header">
            <Icon
              className="fold-icon"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
            <MyHeader />
          </Header>
          <Content className="content">
            <Bread />
            <div className="contentText">{this.props.children}</div>
          </Content>
          <Footer className="footer">{Constants.footer}</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
