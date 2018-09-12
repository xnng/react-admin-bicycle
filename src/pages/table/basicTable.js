import React, { Component } from "react";
import { Card, Table } from "antd";
import axios from "axios";
import API from "../../utils/APIUrl";

export class BasicTable extends Component {
  state = {
    dataSource2: []
  };

  componentDidMount = () => {
    const dataSource = [
      {
        key: "0",
        userName: "jack",
        sex: "1",
        state: "1",
        hobby: "1",
        birthday: "2018-01-01",
        address: "xxxxx",
        time: "09:00"
      },
      {
        key: "1",
        userName: "tom",
        sex: "1",
        state: "1",
        hobby: "1",
        birthday: "2018-01-01",
        address: "xxxxx",
        time: "09:00"
      },
      {
        key: "2",
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

    this.fetch_tableData();
  };

  fetch_tableData = () => {
    axios.get(`${API}/table/list`).then(res => {
      this.setState({
        dataSource2: res.data.result
      });
    });
  };

  render() {
    const columns = [
      {
        title: "id",
        dataIndex: "key",
        key: "key"
      },
      {
        title: "用户名",
        dataIndex: "userName",
        key: "userName"
      },
      {
        title: "性别",
        dataIndex: "sex",
        key: "sex"
      },
      {
        title: "状态",
        dataIndex: "state",
        key: "state"
      },
      {
        title: "爱好",
        dataIndex: "hobby"
      },
      {
        title: "生日",
        dataIndex: "birthday",
        key: "birthday"
      },
      {
        title: "地址",
        dataIndex: "address",
        key: "address"
      },
      {
        title: "早起时间",
        dataIndex: "time",
        key: "time"
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
        <Card title="动态数据渲染表格" style={{ marginTop: 20 }}>
          <Table
            bordered
            pagination={false}
            columns={columns}
            dataSource={this.state.dataSource2}
          />
        </Card>
      </div>
    );
  }
}

export default BasicTable;
