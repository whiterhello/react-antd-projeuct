import React, { Component } from 'react'
import { Form, Input, Button, Checkbox, Typography } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './style/index.less'

const { Title, Text } = Typography

class Login extends Component {
    render() {
        return (
            <div className="login-bg">
                <div className="login-position">
                    <div className="login-title">
                        <Title level={3}>用户登录</Title>
                        <div className="login-title-text">
                            <Text type="secondary">山东科大应用范围内最好的React应用</Text>
                        </div>
                    </div>
                    <div className="login-content">
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={this.onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入你的用户名！',
                                    },
                                ]}
                            >
                                <Input 
                                    prefix={<UserOutlined className="site-form-item-icon" />} 
                                    placeholder="用户名" 
                                    size="large"
                                />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入你的密码！',
                                    },
                                ]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="密码"
                                    size="large"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>自动登录</Checkbox>
                                </Form.Item>

                                <a className="login-form-forgot" href="">
                                    忘记密码
                                </a>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button" size="large">
                                    登 录
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>

            </div>
        );
    }
    onFinish = values => {
        console.log('Received values of form: ', values);
        this.props.history.replace("/")
    };
}

export default Login;