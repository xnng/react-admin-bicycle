import React, { Component } from "react";
import { message, Button, Card } from "antd";

export class messages extends Component {
  showMessage = type => {
    message[type]("恭喜你，已掌握 Antd Admin");
  };

  render() {
    return (
      <div>
        <Card title="全局提示框">
          <Button onClick={() => this.showMessage("success")} type="primary">
            Success
          </Button>
          <Button onClick={() => this.showMessage("info")} type="primary">
            Info
          </Button>
          <Button onClick={() => this.showMessage("warning")} type="primary">
            Warning
          </Button>
          <Button onClick={() => this.showMessage("error")} type="primary">
            Error
          </Button>
          <Button onClick={() => this.showMessage("loading")} type="primary">
            Loading
          </Button>
        </Card>
      </div>
    );
  }
}

export default messages;
