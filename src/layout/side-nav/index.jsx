import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import './style/index.less'

const { Sider } = Layout;
const { SubMenu } = Menu;

class SideNav extends Component {
    state = {
        collapsed: false,
    }
    render() {
        return (
            <Sider 
                collapsed={this.props.collapsed} 
                onCollapse={this.onCollapse}
            >
                <div className="logo">
                    <h3>React</h3>
                </div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <PieChartOutlined />
                        <span>首页</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <DesktopOutlined />
                        <span>数据分析</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <UserOutlined />
                                <span>用户管理</span>
                            </span>
                        }
                    >
                        <Menu.Item key="3">个人中心</Menu.Item>
                        <Menu.Item key="4">个人设置</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <TeamOutlined />
                                <span>团队</span>
                            </span>
                        }
                    >
                        <Menu.Item key="5">Team 1</Menu.Item>
                        <Menu.Item key="6">Team 2</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        );
    }
    onCollapse = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }
}

export default SideNav;