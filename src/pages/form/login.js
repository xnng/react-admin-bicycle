import React, { Component } from "react";
import { Card, Form, Button, Input, message, Icon, Checkbox } from "antd";

const FormItem = Form.Item;

export class Login extends Component {
  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success(
          `恭喜${values.userName},您已通过表单校验，您的密码为${
            userInfo.userPwd
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
            <FormItem>
              <Input placeholder="请输入用户名" />
            </FormItem>
            <FormItem>
              <Input placeholder="请输入密码" />
            </FormItem>
            <FormItem>
              <Button type="primary">登录</Button>
            </FormItem>
            <FormItem>
              <Button type="primary">注册</Button>
            </FormItem>
          </Form>
        </Card>

        <Card title="登录水平表单" style={{ marginTop: 20 }}>
          <Form layout="horizontal" style={{ width: 300 }}>
            <FormItem>
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
                    message: "输入的长度在 5 ~ 10 个字符之间"
                  }
                ]
              })(
                <Input
                  prefix={<Icon type="user" />}
                  placeholder="请输入用户名"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("userPwd", {
                initialValue: "",
                rules: []
              })(
                <Input
                  prefix={<Icon type="lock" />}
                  type="password"
                  placeholder="请输入密码"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("remember", {
                initialValue: true,
                valuePropName: "checked",
                rules: []
              })(<Checkbox>记住密码</Checkbox>)}
              <a style={{ float: "right" }}>忘记密码</a>
            </FormItem>
            <FormItem>
              <Button onClick={this.handleSubmit} type="primary">
                登录
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Form.create()(Login);
