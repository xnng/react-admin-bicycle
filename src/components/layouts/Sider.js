import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import MenuList from "../../config/menu";
import Constants from '../../config/constants'
import "./Sider.less";
import { NavLink } from "react-router-dom";

const SubMenu = Menu.SubMenu;

export class Sider extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    const MenuTreeNode = this.renderMenu(MenuList);
    this.setState({
      MenuTreeNode
    });
  }

  renderMenu = data => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu
            title={
              <span>
                {item.icon && <Icon type={item.icon} />}
                <span>{item.name}</span>
              </span>
            }
            key={item.route}
          >
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={item.route}>
          <NavLink to={item.route}>
            {item.icon && <Icon type={item.icon} />}
            <span>{item.name}</span>
          </NavLink>
        </Menu.Item>
      );
    });
  };

  render() {
    return (
      <Layout.Sider trigger={null} collapsible collapsed={this.props.collapsed}>
        <div className="logo">
          <img src={Constants.logo} alt="logo" />
          <span>{Constants.name}</span>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["/home"]}>
          {this.state.MenuTreeNode}
        </Menu>
      </Layout.Sider>
    );
  }
}

export default Sider;
