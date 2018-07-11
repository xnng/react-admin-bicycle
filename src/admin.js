import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NvaLeft'
import { Row, Col } from 'antd';

export default class Admin extends React.Component {
    render(){
        return(
            <div>
                <Row>
                    <Col span='3'>
                        <NavLeft/>
                    </Col>
                    <Col span='21'>
                        <Header>header</Header>
                        <Row>content</Row>
                        <Footer>footer</Footer>
                    </Col>
                </Row>
            </div>
        )
    }
}