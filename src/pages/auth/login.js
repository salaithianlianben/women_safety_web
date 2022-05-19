import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';
import { Button, Checkbox, Form, Input } from 'semantic-ui-react';
import authAction, {} from '../../store/actions/authAction'

class LoginPage extends Component {
    onSubmit = (event)=>{
        event.preventDefault();
        const {target} = event;
        let targets = Object.fromEntries(new FormData(target));
        this.props.handleLogin(targets)
    }
    render() {
        return (
            <div className="full-width full-height bg-color">
                <Segment>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Field required>
                            <label>Email</label>
                            <input placeholder='safeme@gmail.com' type="email" required name="email"/>
                        </Form.Field>
                        <Form.Field required>
                            <label>Password</label>
                            <input placeholder='Last Name' type="password" required name="password"/>
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Segment>
            </div>
        )
    }
}

const mapStateProps = (state) =>{
    // console.log(state)
    return {
        authInfo:state.authState.authInfo,
        // is_loading:state.authState.loading,
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        handleLogin:(authInfo) => dispatch(authAction.handleLogin(authInfo))
    }
}


export default connect(mapStateProps,mapDispatchProps)(LoginPage);