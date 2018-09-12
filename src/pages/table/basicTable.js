import React, { Component } from "react";
import { Card, Table } from "antd";

export class BasicTable extends Component {
  state = {};

  componentDidMount = () => {
    const dataSource = [
      {
        id: "0",
        userName: "jack",
        sex: "1",
        state: "1",
        hobby: "1",
        birthday: "2018-01-01",
        address: "xxxxx",
        time: "09:00"
      },
      {
        id: "1",
        userName: "tom",
        sex: "1",
        state: "1",
        hobby: "1",
        birthday: "2018-01-01",
        address: "xxxxx",
        time: "09:00"
      },
      {
        id: "2",
        userName: "lisa",
        sex: "1",
        state: "1",
        hobby: "1",
        birthday: "2018-01-01",
        address: "xxxxx",
        time: "09:00"
      }
    ];
    this.setState({
      dataSource
    });
  };

  render() {
    const columns = [
      {
        title: "id",
        dataIndex: "id"
      },
      {
        title: "用户名",
        dataIndex: "userName"
      },
      {
        title: "性别",
        dataIndex: "sex"
      },
      {
        title: "状态",
        dataIndex: "state"
      },
      {
        title: "爱好",
        dataIndex: "hobby"
      },
      {
        title: "生日",
        dataIndex: "birthday"
      },
      {
        title: "地址",
        dataIndex: "address"
      },
      {
        title: "早起时间",
        dataIndex: "time"
      }
    ];

    return (
      <div>
        <Card title="基础表格 ">
          <Table
            bordered
            pagination={false}
            columns={columns}
            dataSource={this.state.dataSource}
          />
        </Card>
      </div>
    );
  }
}

export default BasicTable;
