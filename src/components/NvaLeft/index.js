import React from 'react';
import MenuConfig from '../../config/menueConfig'
import { Menu, Icon } from 'antd';
import './index.less'

const SubMenu = Menu.SubMenu;

export default class NvaLeft extends React.Component {
    componentWillMount() {
        const MenuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            MenuTreeNode
        });
    }

    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu title={<span><Icon type={item.icon} />{item.title}</span>} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item key={item.key}><Icon type={item.icon} />{item.title}</Menu.Item>
        })
    }

    render() {
        return (
            <div>
                <div className="logo">
                    <img src="./assets/logo-ant.svg" alt="" />
                    <h1>Space MS</h1>
                </div>
                <Menu theme="dark" mode="inline">
                    {this.state.MenuTreeNode}
                </Menu>
            </div>
        )
    }
}