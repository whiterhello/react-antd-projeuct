import React, { Component } from 'react';
import { Layout } from 'antd';
import SideNav from '../../layout/side-nav'
import HeaderLayout from '../../layout/header-layout'
import './style/index.less'

const { Content, Footer } = Layout;

class Admin extends Component {
    state = {
        collapsed: false
    }
    render() {
        const { collapsed } = this.state;
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <SideNav
                    collapsed={collapsed}
                />
                <Layout className="site-layout">
                    <HeaderLayout
                        {...this.props}
                        collapsed={collapsed}
                        toggle={this.toggle}
                    />
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            Bill is a cat.
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design 4.0 ©2020</Footer>
                </Layout>
            </Layout>
        );
    }
    toggle = (collapsed) => {
        this.setState({
            collapsed,
        });
    };
}

export default Admin;