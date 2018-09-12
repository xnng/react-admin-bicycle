import React, { Component } from "react";
import { Card, Table, Spin } from "antd";
import axios from "axios";
import API from "../../utils/APIUrl";

export class BasicTable extends Component {
  state = {
    dataSource2: [],
    loading: true
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
    axios
      .get(`${API}/table/list`)
      .then(res => {
        if (res.status === 200) {
          this.setState({
            dataSource2: res.data.result,
            loading: false
          });
        }
      })
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
        render(sex) {
          return sex === 1 ? "男" : "女";
        },
        key: "sex"
      },
      {
        title: "状态",
        dataIndex: "state",
        render(state) {
          let config = {
            "1": "咸鱼一条",
            "2": "风华浪子",
            "3": "北大才子",
            "4": "阿里 FE"
          };
          return config[state];
        },
        key: "state"
      },
      {
        title: "爱好",
        dataIndex: "hobby",
        render(hobby) {
          let config = {
            "1": "游泳",
            "2": "打篮球",
            "3": "踢足球",
            "4": "跑步"
          };
          return config[hobby];
        }
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
          <Spin tip="Loading..." spinning={this.state.loading}>
            <Table
              bordered
              columns={columns}
              dataSource={this.state.dataSource2}
            />
          </Spin>
        </Card>
      </div>
    );
  }
}

export default BasicTable;
