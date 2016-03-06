import React, { PropTypes } from 'react'
import UmsLeftNav from './LeftNav'
import TopNav from './TopNav'
import DisplayError from './devTools/DisplayError'

import Paper from 'material-ui/lib/paper';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button'
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import FontIcon from 'material-ui/lib/font-icon';

import { connect } from 'react-redux'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class Application extends React.Component {

  static propTypes = {
    children: PropTypes.any
  };

  _onMenuIconButtonTouch = () => {
    console.log('this.refs.LeftNav',this.refs.LeftNav );
    this.refs.LeftNav.handleToggle()};

  render() {
    console.log('Application this.props', this.props);
    return (
        <div id="layout">

          <TopNav onMenuIconButtonTouch={this._onMenuIconButtonTouch}/>
          <UmsLeftNav history={this.props.history} ref='LeftNav'/>

          <div id="main">
            <DisplayError />
            {this.props.children}
          </div>

        </div>
    )
  }
}
//export default connect(
//  (state) => {
//    const { router, application } = state;
//    return { router, application }
//  }
//)(Application)
