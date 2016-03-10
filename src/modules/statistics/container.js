'use strict';

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadStatistics } from './actions'

class Statistics extends Component {
  static propTypes = {
    children: PropTypes.any
  };
  componentDidMount() {
    console.log('Statistics this', this);
    this.props.loadStatistics();
  }
  render() {
    return (
      <div>
        <ul>Statistics</ul>
        {this.props.children}
      </div>
    )
  }
}

export default connect((state) => {
  const { enrolmentList, dictionaries } = state;
  return { enrolmentList, dictionaries }
}, {
  loadStatistics
})(Statistics)

