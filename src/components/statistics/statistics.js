'use strict';

import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import Chart from './chart';
//import Tabs from 'react-bootstrap/lib/Tabs';
//import Tab from 'react-bootstrap/lib/Tab';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import { loadStatistics } from './../../modules/statistics/actions'
import { LinkContainer } from 'react-router-bootstrap';

import {
  PRIORITIES,
  ALLOCATIONS_ADMINUNITS,
  ALLOCATIONS_DEPARTMENTS,
  STATISTICS_MAP as map
} from './../../modules/statistics/constants'

class Statistics extends Component {
  static propTypes = {
    children: PropTypes.any,
    dispatch: PropTypes.func.isRequired
  };

  componentDidMount() {
    //cache :-)
    //this.props.dispatch(loadStatistics(map[ALLOCATIONS_ADMINUNITS].callApi.url, ALLOCATIONS_ADMINUNITS));
    //this.props.dispatch(loadStatistics(map[ALLOCATIONS_DEPARTMENTS].callApi.url, ALLOCATIONS_DEPARTMENTS));
    //this.props.dispatch(loadStatistics(map[PRIORITIES].callApi.url, PRIORITIES));
  }

  handleSelect = (selectedKey) => {
    console.log('selected ' + selectedKey);
  };

  render() {
    return (
      <div>
        <div>Statistics</div>
        <Nav bsStyle="pills" stacked activeKey={1} onSelect={this.handleSelect}>
          <LinkContainer to={{ pathname: map[ALLOCATIONS_ADMINUNITS].route}}>
            <NavItem eventKey={1} > { map[ALLOCATIONS_ADMINUNITS].title } </NavItem>
          </LinkContainer>
          <LinkContainer to={{ pathname: map[PRIORITIES].route}}>
            <NavItem eventKey={2} > { map[PRIORITIES].title } </NavItem>
          </LinkContainer>
          <LinkContainer to={{ pathname: map[ALLOCATIONS_DEPARTMENTS].route}}>
            <NavItem eventKey={3} > { map[ALLOCATIONS_DEPARTMENTS].title } </NavItem>
          </LinkContainer>
        </Nav>
        {this.props.children}
      </div>
    )
  }
}
//function mapStateToProps(state, ownProps) {
//  return {
//    id: ownProps.params.id,
//    filter: ownProps.location.query.filter
//  };
//}

//export default connect(mapStateToProps)(Statistics)
export default Statistics


//<Tabs defaultActiveKey={1}>
//  <Tab eventKey={1} title="Стат по олб.">
//  <Chart collection={ALLOCATIONS_ADMINUNITS} config={map[ALLOCATIONS_ADMINUNITS].chartConfig} id='units'/>
//  </Tab>
//  <Tab eventKey={2} title="Priorities">
//  <Chart collection={PRIORITIES} config={map[PRIORITIES].chartConfig} id='priorities'/>
//  </Tab>
//  <Tab eventKey={3} title="Departments">
//  <Chart collection={ALLOCATIONS_DEPARTMENTS} config={map[ALLOCATIONS_DEPARTMENTS].chartConfig}
//id='departments'/>
//  </Tab>
//  </Tabs>