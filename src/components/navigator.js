import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Sidebar, Menu, Icon, Segment, Header, } from 'semantic-ui-react';
import { navigations } from '../config/navigation';
import { DASHBOARD } from '../routes';

export default class Navigator extends Component {
    state = {
        activeRoute:DASHBOARD,
    }
    render() {
        return (
            <Sidebar.Pushable as={Segment} style={{ overflow: 'hidden' }}>
                <Sidebar
                    as={Menu}
                    // animation={animation}
                    direction={"left"}
                    // inverted
                    vertical
                    visible
                    width='wide'
                >
                    <Menu secondary vertical>
                        {
                            navigations.map((e) => <Menu.Item key={e.id}>
                                <Link to={e.path}>
                                    <div className={this.state.activeRoute === e.path ? "menu-item-navigation active-route": "menu-item-navigation"} onClick={()=>this.setState({
                                        activeRoute:e.path
                                    })}>
                                        {e.icon}
                                        <span style={{ color: "black", marginLeft: "10px" }}>{e.title}</span>
                                    </div></Link>
                            </Menu.Item>)
                        }
                    </Menu>

                </Sidebar>

                <Sidebar.Pusher style={{width:'79%'}}>
                    <div className="full-height">
                        {this.props.children}
                    </div>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        )
    }
}
