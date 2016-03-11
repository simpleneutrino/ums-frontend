'use strict';

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadStatistics } from './actions'
import Chart from '../amcharts/chartsFactory';
import { PRIORITIES, ALLOCATIONS_ADMINUNITS, ALLOCATIONS_DEPARTMENTS,
  PRIORITIES_URL, ALLOCATIONS_ADMINUNITS_URL, ALLOCATIONS_DEPARTMENTS_URL } from './constants'

let data = [{
  'year': 2005,
  'income': 23.5
}, {
  'year': 2006,
  'income': 26.2
}, {
  'year': 2007,
  'income': 30.1
}];

let config = {
  type: 'serial',
  dataProvider: data,
  categoryField: 'year',
  rotate: true,

  categoryAxis: {
    gridPosition: 'start',
    axisColor: '#DADADA'
  },
  valueAxes: [{
    axisAlpha: 0.2
  }],
  graphs: [{
    type: 'column',
    title: 'Income',
    valueField: 'income',
    lineAlpha: 0,
    fillColors: '#ADD981',
    fillAlphas: 0.8,
    balloonText: '[[title]] in [[category]]:<b>[[value]]</b>'
  }]
};

class Statistics extends Component {
  static propTypes = {
    children: PropTypes.any
  };
  componentDidMount() {
    console.log('Statistics this', this);
    //this.props.loadStatistics();
  }
  render() {
    console.log('statistics', this.props.statistics);
    return (
      <div>
        <ul>Statistics</ul>
        <Chart collectionName={PRIORITIES} url={PRIORITIES_URL} config={config}/>
        <Chart collectionName={ALLOCATIONS_ADMINUNITS} url={ALLOCATIONS_ADMINUNITS_URL} config={config}/>
        <Chart collectionName={ALLOCATIONS_DEPARTMENTS} url={ALLOCATIONS_DEPARTMENTS_URL} config={config}/>
      </div>
    )
  }
}

export default connect((state) => {
  const { statistics } = state;
  return { statistics }
})(Statistics)

