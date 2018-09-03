import React, { Component } from "react";
import MenuList from "../../config/menuConfig";
import { Menu, Icon } from "antd";
import "./index.less";
import { height } from "window-size";

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
          {/* <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="appstore" />
                <span>Navigation Two</span>
              </span>
            }
          >
            <Menu.Item key="1">Option 5</Menu.Item>
            <Menu.Item key="2">Option 6</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="setting" />
                <span>Navigation Three</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu> */}
        </Menu>
      </div>
    );
  }
}

export default NavLeft;
