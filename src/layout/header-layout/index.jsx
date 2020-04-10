import React, { Component } from 'react';
import { Layout, Avatar, Badge, Tooltip, Input, Menu, Dropdown } from 'antd';
import {
    BellOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    QuestionCircleOutlined,
    SettingOutlined,
    ImportOutlined,
} from '@ant-design/icons';
import './style/index.less'

const { Header } = Layout, { Search } = Input;

const text = <span>你有问题？</span>;
const menu = (props) => {
    return (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.baidu.com/">
                    <span className="ant-header-user-icon">
                        <UserOutlined />
                    </span>
                    个人中心
          </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.baidu.com/">
                    <span className="ant-header-user-icon">
                        <SettingOutlined />
                    </span>
                    个人设置
          </a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item>
                <span onClick={() => loginOut(props)}>
                    <span className="ant-header-user-icon">
                        <ImportOutlined />
                    </span>
                    退出登录
          </span>
            </Menu.Item>
        </Menu>
    )
}

class HeaderLayout extends Component {
    render() {
        const { collapsed } = this.props;
        return (
            <Header className="site-layout-background">
                <div className="ant-global-header">
                    <span className="ant-global-header-trigger" onClick={this.toggle}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                        })}
                    </span>
                    <div className="ant-header-right">
                        <span className="ant-header-component-input">
                            <Search
                                placeholder="输入搜索内容"
                                onSearch={value => console.log(value)}
                                style={{ width: 200 }}
                            />
                        </span>
                        <span className="ant-header-component">
                            <Badge count={99} offset={[4, -5]}>
                                <BellOutlined style={{ fontSize: '17px' }} />
                            </Badge>
                        </span>
                        <Dropdown overlay={() => menu(this.props)}>
                            <span className="ant-header-component">
                                <Avatar icon={<UserOutlined />} size={25} />
                                <span style={{ marginLeft: '10px' }}>我是我</span>
                            </span>
                        </Dropdown>
                        <Tooltip placement="bottom" title={text}>
                            <span className="ant-header-component">
                                <QuestionCircleOutlined style={{ fontSize: '17px' }} />
                            </span>
                        </Tooltip>
                    </div>
                </div>
            </Header>
        );
    }
    toggle = () => {
        this.props.toggle(!this.props.collapsed)
    }
}

function loginOut (props) {
    props.history.replace("/login")
}

export default HeaderLayout;