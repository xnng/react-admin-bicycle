import React, { Component } from "react";
import MenuList from "../../config/menuConfig";
import { Menu,Icon } from "antd";

const SubMenu = Menu.SubMenu;

export class NavLeft extends Component {
  render() {
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>Bicycle MS</h1>
        </div>
        <Menu
        defaultSelectedKeys={['1']}
        mode="inline"
        theme="dark"
      >
        <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
          <Menu.Item key="1">Option 5</Menu.Item>
          <Menu.Item key="2">Option 6</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
      </div>
    );
  }
}

export default NavLeft;
