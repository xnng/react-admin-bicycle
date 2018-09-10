import React, { Component } from "react";
import {
  Card,
  Input,
  Form,
  Radio,
  Select,
  Switch,
  DatePicker,
  TimePicker,
  Upload,
  Icon,
  InputNumber,
  Modal
} from "antd";

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;

export class Register extends Component {
  state = {
    previewVisible: false,
    previewImage: "",
    fileList: []
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: 24,
        sm: 4
      },
      wrapperCol: {
        xs: 24,
        sm: 12
      }
    };

    const { previewVisible, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div>Upload</div>
      </div>
    );

    return (
      <div>
        <Card title="注册表单">
          <Form>
            <FormItem label="用户名" {...formItemLayout}>
              {getFieldDecorator("userName", {
                initialValue: "",
                rules: [
                  {
                    required: true,
                    message: "用户名不能为空"
                  }
                ]
              })(
                <Input
                  prefix={<Icon type="user" />}
                  placeholder="请输入用户名"
                />
              )}
            </FormItem>
            <FormItem label="密码" {...formItemLayout}>
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
            </FormItem>
            <FormItem label="性别" {...formItemLayout}>
              {getFieldDecorator("sex", {
                initialValue: "1",
                rules: []
              })(
                <RadioGroup>
                  <Radio value="1">男</Radio>
                  <Radio value="2">女</Radio>
                </RadioGroup>
              )}
            </FormItem>
            <FormItem label="年龄" {...formItemLayout}>
              {getFieldDecorator("age", {
                initialValue: 18,
                rules: []
              })(<InputNumber />)}
            </FormItem>
            <FormItem label="当前状态" {...formItemLayout}>
              {getFieldDecorator("state", {
                initialValue: "1",
                rules: []
              })(
                <Select>
                  <Option value="1">咸鱼一条</Option>
                  <Option value="2">风华浪子</Option>
                  <Option value="3">阿里 FE</Option>
                  <Option value="4">创业者</Option>
                </Select>
              )}
            </FormItem>
            <FormItem label="爱好" {...formItemLayout}>
              {getFieldDecorator("hobby", {
                initialValue: ["2", "3"]
              })(
                <Select mode="multiple">
                  <Option value="1">唱歌</Option>
                  <Option value="2">跳舞</Option>
                  <Option value="3">游泳</Option>
                  <Option value="4">篮球</Option>
                </Select>
              )}
            </FormItem>
            <FormItem label="是否已婚" {...formItemLayout}>
              {getFieldDecorator("isMarried", {
                valuePropsName: "checked",
                initialValue: false
              })(<Switch />)}
            </FormItem>
            <FormItem label="生日" {...formItemLayout}>
              {getFieldDecorator("birthday", {
                valuePropsName: "checked",
                initialValue: null
              })(<DatePicker placeholder="选择日期" />)}
            </FormItem>
            <FormItem label="联系地址" {...formItemLayout}>
              {getFieldDecorator("address", {})(
                <TextArea autosize={{ minRows: 3, maxRows: 6 }} />
              )}
            </FormItem>
            <FormItem label="早起时间" {...formItemLayout}>  
              {getFieldDecorator("time", {})(
                <TimePicker placeholder="选择时间" />
              )}
            </FormItem>
            <FormItem label="头像" {...formItemLayout}>
              {getFieldDecorator("avatar", {})(
                <Upload
                  action="//jsonplaceholder.typicode.com/posts/"
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={this.handlePreview}
                  onChange={this.handleChange}
                >
                  {fileList.length >= 1 ? null : uploadButton}
                </Upload>
              )}
              <Modal
                visible={previewVisible}
                footer={null}
                onCancel={this.handleCancel}
              />
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Form.create()(Register);
