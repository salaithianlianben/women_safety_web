import React, { Component } from 'react'
import { Segment, Loader } from 'semantic-ui-react'

class LoadingScreen extends Component {
    render() {
        return (
            <div>
                <Loader inline active="centered"/>
            </div>
        )
    }
}


export default LoadingScreen;