import React, { Component } from "react";
import MenuList from "../../config/menuConfig";
import { Menu } from "antd";
import "./index.less";

const SubMenu = Menu.SubMenu;

export class NavLeft extends Component {
  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuList);
    this.setState({
      menuTreeNode
    });
  }

  renderMenu(data) {
    return data.map(item => {
      if (item.children) {
        this.renderMenu(item.children);
        return ( 
          <SubMenu key={item.key} title={item.title}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      } else {
        return <Menu.Item key={item.key}>{item.title}</Menu.Item>;
      }
    });
  }

  render() {
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>Bicycle MS</h1>
        </div>
        <Menu className="nav-left" defaultSelectedKeys={["1"]} mode="inline" theme="dark">
          {this.state.menuTreeNode}
        </Menu>
      </div>
    );
  }
}

export default NavLeft;
