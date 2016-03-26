
'use strict';

import React, {Component, PropTypes} from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import { LinkContainer } from 'react-router-bootstrap';

import {
  PRIORITIES,
  ALLOCATIONS_ADMINUNITS,
  ALLOCATIONS_DEPARTMENTS,
  ALLOCATIONS_ADMINUNITS_MAP,
  PLACES,
  STATISTICS_MAP as map
} from './../constants';

class Statistics extends Component {
  static propTypes = {
    children: PropTypes.any
  };

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
          <LinkContainer to={{ pathname: map[ALLOCATIONS_ADMINUNITS_MAP].route}}>
            <NavItem eventKey={2} > { map[ALLOCATIONS_ADMINUNITS_MAP].title } </NavItem>
          </LinkContainer>
          <LinkContainer to={{ pathname: map[PRIORITIES].route}}>
            <NavItem eventKey={3} > { map[PRIORITIES].title } </NavItem>
          </LinkContainer>
          <LinkContainer to={{ pathname: map[ALLOCATIONS_DEPARTMENTS].route}}>
            <NavItem eventKey={4} > { map[ALLOCATIONS_DEPARTMENTS].title } </NavItem>
          </LinkContainer>
          <LinkContainer to={{ pathname: map[PLACES].route}}>
            <NavItem eventKey={5} > { map[PLACES].title } </NavItem>
          </LinkContainer>
        </Nav>
        {this.props.children}
      </div>
    );
  }
}

export default Statistics;