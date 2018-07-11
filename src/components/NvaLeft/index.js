import React from 'react';
import MenuConfig from '../../config/menueConfig'
import { Menu, Icon } from 'antd';
import './index.css'
const SubMenu = Menu.SubMenu;


export default class NvaLeft extends React.Component {
    componentWillMount(){
        const MenuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            MenuTreeNode
        });
    }

    renderMenu = (data) =>{
        
    }

    render() {
        return (
            <div>
                <div className="logo">
                    <img src="./assets/logo-ant.svg" alt="" />
                    <h1>Space MS</h1>
                </div>
                <Menu theme="dark" mode="inline">
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                        <Menu.Item key="4">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </SubMenu>
                    {this.state.MenuTreeNode}
                </Menu>
            </div>
        )
    }
}