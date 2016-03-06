'use strict';

import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import NavigationMenu from 'material-ui/lib/svg-icons//navigation/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Paper from 'material-ui/lib/paper';
import FontIcon from 'material-ui/lib/font-icon';

export default class TopNav extends React.Component {
  render() {
    let menuButton = <IconButton onClick={this.props.onMenuIconButtonTouch}>
        <NavigationMenu/>
      </IconButton>;

    return (<Paper className='topNav' rounded={false}>
      <AppBar
          title={ <span>UMS</span> }
          iconElementLeft={menuButton}
          iconElementRight={
                  <IconMenu iconButtonElement={
                    <IconButton><MoreVertIcon /></IconButton>
                   }>
                    <MenuItem primaryText="Refresh" />
                    <MenuItem primaryText="Help" />
                    <MenuItem primaryText="Sign out" />
                  </IconMenu>
                }
      />
    </Paper>)
  }
}