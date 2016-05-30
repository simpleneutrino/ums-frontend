'use strict';

import React, {Component, PropTypes} from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import { LinkContainer } from 'react-router-bootstrap';
import DictionaryData from './DictionaryData';

import {
  DEPARTMENTS,
  ENROLMENTS_TYPES,
  ENROLMENTS_STATUS_TYPES,
  TIMEPERIODS,
  DICTIONARY_MAP as map
} from './../constants';

export default class Dictionaries extends React.Component {
  render () {
    return (

      <div className="dictionaries">
        <Nav className="dictionaries__list-nav" bsStyle="pills" stacked activeKey={1} onSelect={this.handleSelect}>
          <LinkContainer to={{ pathname: '/dictionaries/' + DEPARTMENTS }}>
            <NavItem eventKey={1} > {map[DEPARTMENTS].title} </NavItem>
          </LinkContainer>
          <LinkContainer to={{ pathname: '/dictionaries/' + ENROLMENTS_TYPES}}>
            <NavItem eventKey={2} > { map[ENROLMENTS_TYPES].title} </NavItem>
          </LinkContainer>
          <LinkContainer to={{ pathname: '/dictionaries/' + ENROLMENTS_STATUS_TYPES}}>
            <NavItem eventKey={3} > {map[ENROLMENTS_STATUS_TYPES].title} </NavItem>
          </LinkContainer>
          <LinkContainer to={{ pathname: '/dictionaries/' +  TIMEPERIODS}}>
            <NavItem eventKey={4} > {map[TIMEPERIODS].title} </NavItem>
          </LinkContainer>

        </Nav>
        {this.props.children}
      </div>

    );
  }
}

