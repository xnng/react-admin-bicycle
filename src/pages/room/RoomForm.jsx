import React, { Component } from "react";
import { Table, Divider } from "antd";
import axios from "axios";
import API from "../../utils/APIUrl";

export class RoomForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: []
    };
  }

  componentWillMount = () => {
    axios
      .get(`${API}/rooms`)
      .then(res => {
        this.setState({
          rooms: res.data
        });
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  render() {
    const columns = [
      {
        title: "房间",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "时段",
        dataIndex: "time",
        key: "time"
      },
      {
        title: "状态",
        dataIndex: "state",
        key: "state"
      },
      {
        title: "操作",
        key: "action",
        render: record => (
          <span>
            <a>预约</a>
            <Divider type="vertical" />
            <a>取消</a>
          </span>
        )
      }
    ];

    return (
      <div>
        <Table columns={columns} dataSource={this.state.rooms} />
      </div>
    );
  }
}

export default RoomForm;
