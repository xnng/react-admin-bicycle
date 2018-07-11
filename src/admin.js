import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NvaLeft'
import { Row, Col } from 'antd';
import './style/common.less'

export default class Admin extends React.Component {
    render(){
        return(
            <div>
                <Row className="container">
                    <Col span='3' className="nav-left">
                        <NavLeft/>
                    </Col>
                    <Col span='21' className="main">
                        <Header>header</Header>
                        <Row className="content">content</Row>
                        <Footer>footer</Footer>
                    </Col>
                </Row>
            </div>
        )
    }
}