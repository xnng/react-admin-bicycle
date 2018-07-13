import React from 'react';
import { Row, Col } from 'antd';
import './index.less'

export default class Header extends React.Component {

    componentWillMount() {
        this.setState({
            userName: "ifking"
        }
        )
    }
    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span="24">
                        <span>欢迎 {this.state.userName}</span>
                        <a >退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span="20" className="weather">
                        <sapn className="dat e">2018-07-11</sapn>
                        <sapn className="weather-detail">晴转多云</sapn>
                    </Col>
               </Row>
            </div>
                )
            }
}