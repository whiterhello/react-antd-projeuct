import React, { Component } from 'react';
import { Layout } from 'antd';
import SideNav from '../side-nav'
import HeaderLayout from '../header-layout'
import './style/index.less'

class AdminLayout extends Component {
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
                    {this.props.children}
                </Layout>
            </Layout>
        );
    }
    toggle = (collapsed) => {
        this.setState({
            collapsed
        });
    };
}

export default AdminLayout;