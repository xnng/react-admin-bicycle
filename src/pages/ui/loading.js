import React, { Component } from "react";
import { Card, Button, Spin, Icon, Alert } from "antd";

export class Loading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  handleLoading = () => {
    this.setState({
      loading: false
    });
  };

  render() {
    return (
      <div>
        <Card title="Spin 用法">
          <Spin style={{ marginRight: 20 }} size="small" />
          <Spin style={{ marginRight: 20 }} />
          <Spin style={{ marginRight: 20 }} size="large" />
          <Spin
            style={{ marginRight: 20 }}
            indicator={<Icon type="loading" />}
          />
        </Card>

        <Card title="内容遮罩" style={{ marginTop: 20 }}>
          <Spin tip="Loading..." spinning={this.state.loading}>
            <Alert
              message="Antd"
              description="Welcome to Antd Admin"
              type="info"
            />
          </Spin>
          <Button
            onClick={this.handleLoading}
            style={{ marginTop: 10 }}
            type="primary"
            block
          >
            加载完成
          </Button>
        </Card>
      </div>
    );
  }
}

export default Loading;
