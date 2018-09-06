import React, { Component } from "react";
import { Card, Form, Input, Button, message, Icon, Checkbox } from "antd";

export class FormLogin extends Component {
  handleSubmit = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success(
          `恭喜${values.userName}，您通过本次表单组件学习，当前密码为：${
            values.userPwd
          }`
        );
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Card title="登录行内表单">
          <Form layout="inline">
            <Form.Item>
              <Input placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item>
              <Input placeholder="请输入密码" />
            </Form.Item>
            <Form.Item>
              <Button type="primary">登录</Button>
            </Form.Item>
          </Form>
        </Card>
        <Card title="登录行内表单" style={{ marginTop: 20 }}>
          <Form style={{ width: 300 }}>
            <Form.Item>
              {getFieldDecorator("userName", {
                initialValue: "",
                rules: [
                  {
                    required: true,
                    message: "用户名不能为空"
                  },
                  {
                    min: 5,
                    max: 10,
                    message: "长度不再范围内"
                  }
                ]
              })(
                <Input
                  prefix={<Icon type="user" />}
                  placeholder="请输入用户名"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("userPwd", {
                initialValue: "",
                rules: [
                  {
                    required: true,
                    message: "密码不能为空"
                  }
                ]
              })(
                <Input
                  prefix={<Icon type="lock" />}
                  type="password"
                  placeholder="请输入密码"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("remember", {
                valuePropName: 'checked',
                initialValue: true,
                rules: [
                  {
                    required: true,
                    message: "密码不能为空"
                  }
                ]
              })(<Checkbox>记住密码</Checkbox>)}
              <a style={{float: "right"}}>忘记密码</a>
            </Form.Item>
            <Form.Item>
              <Button onClick={this.handleSubmit} type="primary">
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Form.create()(FormLogin);
