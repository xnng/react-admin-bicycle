import React, { Component } from "react";
import { Card, Button } from "antd";
import "./ui.less";

export class Buttons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  handleCloseLoading = () => {
    this.setState({
      loading: false
    });
  };

  render() {
    return (
      <div>
        <Card title="基础按钮">
          <Button type="primary">bgrc</Button>
          <Button>bgrc</Button>
          <Button type="dashed">bgrc</Button>
          <Button type="danger">bgrc</Button>
          <Button disabled>bgrc</Button>
        </Card>
        <Card title="图形按钮">
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button shape="circle" icon="search" />
          <Button type="primary" icon="search">
            搜索
          </Button>
          <Button type="primary" icon="download">
            下载
          </Button>
        </Card>
        <Card title="Loading 按钮">
          <Button type="primary" loading={this.state.loading}>
            确定
          </Button>
          <Button type="primary" shape="circle" loading={this.state.loading} />
          <Button loading={this.state.loading}>点击加载</Button>
          <Button type="primary" onClick={this.handleCloseLoading}>
            关闭
          </Button>
        </Card>
        <Card title="按钮组">
          <Button.Group>
            <Button type="primary" icon="left" style={{margin: 0}}>返回</Button>
            <Button type="primary" icon="right">前进 </Button>
          </Button.Group>
        </Card>
      </div>
    );
  }
}

export default Buttons;
