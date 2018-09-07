import React, { Component } from "react";
import { Icon, Menu } from "antd";
import "./Header.less";

const SubMenu = Menu.SubMenu;

export class Header extends Component {
  render() {
    return (
      <div className="right-icons" style={{ marginRight: 40 }}>
        <Icon type="bell" className="bellIcon" />
        <Menu mode="horizontal">
          <SubMenu
            className="userIcon"
            title={
              <span>
                <Icon type="user" />
                bgrc
              </span>
            }
          >
            <Menu.Item>注销</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default Header;
