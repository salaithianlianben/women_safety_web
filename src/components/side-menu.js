import React, { Component } from 'react'
import { Menu, MenuItem } from 'semantic-ui-react'
import { navigations } from '../config/navigation';

class SideMenuNavigation extends Component {

    state = {
        activeItem:'',
    }

    render() {
        return (
            <Menu vertical>
                {
                    navigations.map((e)=><MenuItem name={e.title} active={this.state.activeItem == e.name}></MenuItem>)
                }
            </Menu>
        )
    }
}

export default SideMenuNavigation;