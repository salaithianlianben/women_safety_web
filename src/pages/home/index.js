import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Sidebar, Menu, Icon, Segment, Header, } from 'semantic-ui-react';
import LoadingScreen from '../../components/loading-screen';
import { logout } from '../../config/firebase';
import { navigations } from '../../config/navigation';
import authAction, { } from '../../store/actions/authAction'

class HomePage extends Component {

    render() {
        return (
            <div style={{ width: "100%", height: "100%" }}>
                

            </div>
        )
    }
}

const mapStateProps = (state) => {
    return {
        authInfo: state.authState.authInfo,
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        handleLogout: () => dispatch(authAction.handleLogout)
    }
}

export default connect(mapStateProps, mapDispatchProps)(HomePage);