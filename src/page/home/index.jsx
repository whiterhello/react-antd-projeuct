import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { Layout } from 'antd';
import SideNav from '../../layout/side-nav'
import HeaderLayout from '../../layout/header-layout'
import './style/index.less'
import Admin from '../admin'
import DataAnalysis from '../dataAnalysis'
import UserControl from '../userControl'
import UserSet from '../userSet'

const { Content, Footer } = Layout;

class Home extends Component {
    state = {
        collapsed: false
    }
    render() {
        const { collapsed } = this.state;
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <SideNav
                    collapsed={collapsed}
                    {...this.props}
                />
                <Layout className="site-layout">
                    <HeaderLayout
                        {...this.props}
                        collapsed={collapsed}
                        toggle={this.toggle}
                    />
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <Switch>
                                <Route
                                    path="/data-analysis"
                                    component={DataAnalysis}
                                />
                                <Route
                                    path="/user/control"
                                    component={UserControl}
                                />
                                <Route
                                    path="/user/set"
                                    component={UserSet}
                                />
                                <Route
                                    exact
                                    path="/"
                                    component={Admin}
                                />
                                <Redirect 
                                    to="/"
                                />
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design 4.0 ©2020</Footer>
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

export default Home;