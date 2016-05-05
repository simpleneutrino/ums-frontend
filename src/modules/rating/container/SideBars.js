'use strict';

import React, {Component, PropTypes} from 'react'
import HelpSideBar from '../components/HelpSideBar'
import StatSideBar from '../components/StatSideBar'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {toggleHelperSidebar, toggleGenderStatSidebar} from '../actions'
import '../styles/side-bar-right.styl'

class SideBars extends React.Component {
  render() {
    const { closeHelperSidebar, closeGenderStatSidebar,  } = this.props;
    const { genderStatIsOpen, helpIsOpen, specofferId } = this.props;

    return (
      <div>
        <HelpSideBar isOpen={helpIsOpen} close={closeHelperSidebar} />
        <StatSideBar isOpen={genderStatIsOpen} close={closeGenderStatSidebar} specofferId={specofferId}/>
      </div>
    )
  }
}

export default connect((state, ownProps) => {
  return {
    helpIsOpen: state.rating.sidebar.helpIsOpen,
    genderStatIsOpen: state.rating.sidebar.genderStatIsOpen,
    specofferId: ownProps.location.query.specofferId,
  }
}, (dispath) => {
  return bindActionCreators({
    closeHelperSidebar: toggleHelperSidebar(false),
    closeGenderStatSidebar: toggleGenderStatSidebar(false),
  }, dispath)
})(SideBars)