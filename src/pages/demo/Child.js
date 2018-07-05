import React from 'react'

export default class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentWillMount(){
        console.log("will mount")
    }

    componentDidMount(){
        console.log("did mount")
    }

    componentWillReceiveProps(){
        console.log('will receive props')
    }

    shouldComponentUpdate(){
        console.log('should update')
        return true
    }

    componentWillUpdate(){
        console.log('will update')
    }

    componentDidUpdate(){
        console.log('did update')
    }

    render() {
        return (
            <div>
                <p>子组件</p>
                <p>{this.props.name}</p>
            </div>
        )
    }
}