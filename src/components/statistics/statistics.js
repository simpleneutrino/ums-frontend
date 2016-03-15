'use strict';

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Chart from './chartsFactory';

import {
  PRIORITIES,
  ALLOCATIONS_ADMINUNITS,
  ALLOCATIONS_DEPARTMENTS,
  STATISTICS_MAP as map } from './../../modules/statistics/constants'

class Statistics extends Component {
  static propTypes = {
    children: PropTypes.any
  };
  componentDidMount() {
    console.log('Statistics this', this);
  }
  render() {
    console.log('statistics', this.props.statistics);
    return (
      <div>
        <ul>Statistics</ul>
        <Chart collectionName={PRIORITIES}
               url={map[PRIORITIES].url}
               config={map[PRIORITIES].chartConfig}/>
        <Chart collectionName={ALLOCATIONS_ADMINUNITS}
               url={map[ALLOCATIONS_ADMINUNITS].url}
               config={map[ALLOCATIONS_ADMINUNITS].chartConfig}/>
        <Chart collectionName={ALLOCATIONS_DEPARTMENTS}
               url={map[ALLOCATIONS_DEPARTMENTS].url}
               config={map[ALLOCATIONS_DEPARTMENTS].chartConfig}/>
      </div>
    )
  }
}

export default connect((state) => {
  const { statistics } = state;
  return { statistics }
})(Statistics)

