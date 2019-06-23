import React, { Component } from 'react'

class ErrorBoundry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    //This basically it will be trigged if there is an error in our app to load a component
    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) { //This means if there is error === true
            return <h1>Ooooops. That is not good!</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;