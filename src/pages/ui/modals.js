import React, { Component } from "react";
import { Modal, Button, Card } from "antd";

export class Modals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal1: false,
      showModal2: false,
      showModal3: false,
      showModal4: false
    };
  }

  handleOpen = type => {
    this.setState({
      [type]: true
    });
  };

  handleConfirm = type => {
    Modal[type]({
      title: "确认？",
      content: "确定要离开吗?",
      onOk() {
        console.log("ok");
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  };

  render() {
    return (
      <div>
        <Card title="基础对话框">
          <Button type="primary" onClick={() => this.handleOpen("showModal1")}>
            Open
          </Button>
          <Button type="primary" onClick={() => this.handleOpen("showModal2")}>
            自定义页脚
          </Button>
        </Card>

        <Card title="信息确认框" style={{marginTop: 20  }}>
          <Button type="primary" onClick={() => this.handleConfirm("confirm")}>
            Confirm
          </Button>
          <Button type="primary" onClick={() => this.handleConfirm("info")}>
            Info
          </Button>
          <Button type="primary" onClick={() => this.handleConfirm("success")}>
            Success
          </Button>
          <Button type="primary" onClick={() => this.handleConfirm("warning")}>
            Warning
          </Button>
        </Card>

        <Modal
          title="Tips"
          visible={this.state.showModal1}
          onCancel={() => {
            this.setState({
              showModal1: false
            });
          }}
        >
          <p>欢迎来到 Antd Admin</p>
        </Modal>
        <Modal
          title="Tips"
          visible={this.state.showModal2}
          okText="好的"
          cancelText="算了"
          onCancel={() => {
            this.setState({
              showModal2: false
            });
          }}
        >
          <p>欢迎来到 Antd Admin</p>
        </Modal>
      </div>
    );
  }
}

export default Modals;
