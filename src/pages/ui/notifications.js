import React, { Component } from "react";
import { notification, Card, Button } from "antd";

export class Notification extends Component {
  openNotification = (type, direction) => {
    notification[type]({
      message: "发工资了",
      description: "上个月考勤 22 天，迟到 12 天，实发工资 250，请笑纳",
      placement: direction
    });
  };

  render() {
    return (
      <div>
        <Card title="通知提醒框">
          <Button
            onClick={() => this.openNotification("success", "topLeft")}
            type="primary"
          >
            Success
          </Button>
          <Button
            onClick={() => this.openNotification("info", "topRight")}
            type="primary"
          >
            Info
          </Button>
          <Button
            onClick={() => this.openNotification("warning", "bottomLeft")}
            type="primary"
          >
            Warning
          </Button>
          <Button
            onClick={() => this.openNotification("error", "bottomRight")}
            type="primary"
          >
            Error
          </Button>
        </Card>
      </div>
    );
  }
}

export default Notification;
