'use strict';

import React, {Component, PropTypes} from 'react'
import HelpBtn from '../components/HelpBtn'
import StatBtn from '../components/StatBtn'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {toggleHelperSidebar, toggleGenderStatSidebar} from '../actions'

class ToggleSideBar extends React.Component {
  render() {
    const { openHelperSidebar, openGenderStatSidebar, specofferId} = this.props;
    return (
      <div >
          <HelpBtn openSidebar={openHelperSidebar}/>
          {specofferId && <StatBtn openSidebar={openGenderStatSidebar}/>}
      </div>
    )
  }
}
ToggleSideBar.PropTypes = {
  specofferId: PropTypes.String,
  openHelperSidebar: PropTypes.func.isRequired,
  openGenderStatSidebar: PropTypes.func.isRequired
}

export default connect((state, ownProps) => {
  return {
    specofferId: ownProps.location.query.specofferId,
  }
}, (dispath) => {
  return bindActionCreators({
    openHelperSidebar: toggleHelperSidebar(),
    openGenderStatSidebar: toggleGenderStatSidebar(),
  }, dispath)
})(ToggleSideBar)