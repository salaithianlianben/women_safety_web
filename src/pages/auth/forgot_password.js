import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';

class ForgotPasswordPage extends Component {
    render() {
        return (
            <Segment>
                <div>Forgot Password</div>
            </Segment>
        )
    }
}

export default connect()(ForgotPasswordPage);