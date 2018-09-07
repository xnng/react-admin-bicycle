import React, { Component } from "react";
import { Card, Button, Icon, Radio } from "antd";
import "./ui.less";

export class Buttons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      size: "default"
    };
  }

  handleCloseLoading = () => {
    this.setState({
      loading: false
    });
  };

  handleChangeSize = (e) => {
    this.setState({
      size: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Card title="基础按钮">
          <Button type="primary">Antd</Button>
          <Button>Antd</Button>
          <Button type="dashed">Antd</Button>
          <Button type="danger">Antd</Button>
          <Button disabled>Antd</Button>
        </Card>

        <Card title="图形按钮" style={{ marginTop: 20 }}>
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

        <Card title="Loading 按钮" style={{ marginTop: 20 }}>
          <Button type="primary" loading={this.state.loading}>
            确定
          </Button>
          <Button type="primary" shape="circle" loading={this.state.loading} />
          <Button loading={this.state.loading}>点击加载</Button>
          <Button shape="circle" loading={this.state.loading} />
          <Button type="primary" onClick={this.handleCloseLoading}>
            关闭
          </Button>
        </Card>

        <Card title="按钮组" style={{ marginTop: 20 }}>
          <Button.Group>
            <Button icon="left" type="primary" style={{ margin: 0 }}>
              返回
            </Button>
            <Button type="primary">
              前进
              <Icon type="right" />
            </Button>
          </Button.Group>
        </Card>

        <Card title="按钮尺寸" style={{ marginTop: 20 }}>
          <Radio.Group size={this.state.size} onChange={this.handleChangeSize}>
            <Radio value="small">小</Radio>
            <Radio value="default">中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>
          <Button type="primary" size={this.state.size}>
            Antd
          </Button>
          <Button type="dashed" size={this.state.size}>
            Antd
          </Button>
          <Button type="danger" size={this.state.size}>
            Antd
          </Button>
          <Button type="primary" size={this.state.size}>
            Antd
          </Button>
        </Card>
      </div>
    );
  }
}

export default Buttons;
