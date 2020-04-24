import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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

const list = [
    {
        name: "首页",
        key: "/",
        icon: "PieChartOutlined",
    },
    {
        name: "数据分析",
        key: "/data-analysis",
        icon: "DesktopOutlined"
    },
    {
        name: "用户管理",
        key: "sub1",
        icon: "UserOutlined",
        children: [
            {
                name: "个人中心",
                key: "/user/control"
            },
            {
                name: "个人设置",
                key: "/user/set"
            }
        ]
    }
];

class SideNav extends Component {
    state = {
        collapsed: false,
        current:''
    }
    componentWillMount(){
        this.menuList =  this.sideMenu(list);
    }
    render() {
        const path = this.props.location.pathname;
        const opKey = this.opKey
        return (
            <Sider
                collapsed={this.props.collapsed}
                onCollapse={this.onCollapse}
            >
                <div className="logo">
                    <h3>React</h3>
                </div>
                <Menu 
                    theme="dark" 
                    defaultSelectedKeys={[path]} 
                    mode="inline" 
                    defaultOpenKeys={[opKey]}
                >
                    {this.menuList}
                </Menu>
            </Sider>
        );
    }

    onCollapse = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }
    
    sideMenu = data => {
       const path = this.props.location.pathname;
       return data.map(item => {
            if (item.children) {
                const cItem = item.children.find(item => item.key === path);
                if(cItem){
                    this.opKey = item.key;
                }
                return (
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                                {
                                    item.icon && this.menuIcon(item.icon)
                                }
                                <span>{item.name}</span>
                            </span>
                        }
                    >
                       {this.sideMenu(item.children)}
                    </SubMenu>
                )
            } 
            return (
                <Menu.Item key={item.key}>
                    <Link to={item.key}>
                        {
                            item.icon && this.menuIcon(item.icon)
                        }
                        <span>{item.name}</span>
                    </Link>
                </Menu.Item>
            )
        })
    }

    menuIcon = icon => {
        switch (icon){
            case "PieChartOutlined" :
                return <PieChartOutlined />
            case "DesktopOutlined" :
                return <DesktopOutlined />
            case "UserOutlined" : 
                return <UserOutlined />
            case "TeamOutlined" :
                return <TeamOutlined />
            default :
            return <PieChartOutlined />
        }
    }
}

export default SideNav;