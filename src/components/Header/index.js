import React, { Component } from "react";
import { Row, Col } from "antd";
import "./index.less";
import moment from "moment";
import { getWeather } from "../../utils/GetWeather";

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    this.setState({
      userName: "bgrc"
    });

    setInterval(() => {
      let sysTime = moment().format("YYYY-MM-DD HH:mm:ss");
      this.setState({
        sysTime
      });
    }, 1000);

    this.getWeatherAPIData();
  }

  getWeatherAPIData() {
    let city = "北京";
    getWeather({
      url:
        "http://api.map.baidu.com/telematics/v3/weather?location=" +
        encodeURIComponent(city) +
        "&output=json&ak=3p49MVra6urFRGOT9s8UBWr2"
    }).then(res => {
      if (res.status === "success") {
        let data = res.results[0].weather_data[0];
        this.setState({
          dayPictureUrl: data.dayPictureUrl,
          weather: data.weather
        });
      }
    });
  }

  render() {
    return (
      <div>
        <Row className="header">
          <Col className="header-top" span="24">
            <span>欢迎 {this.state.userName}</span>
            <a>退出</a>
          </Col>
        </Row>
        <Row className="breadCrumb">
          <Col className="breadCrumb-title" span="4">
            首页
          </Col>
          <Col className="weather" span="20">
            <span className="date">{this.state.sysTime}</span>
            <img src={this.state.dayPictureUrl} alt="" />
            <span className="weather-detail">{this.state.weather}</span>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
