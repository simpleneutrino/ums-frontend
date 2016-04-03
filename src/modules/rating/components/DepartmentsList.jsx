'use strict';

import React, {Component, PropTypes} from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import { LinkContainer } from 'react-router-bootstrap';

export default class DepartmentsList extends Component {
  static propTypes = {
    departments: PropTypes.arrayOf(React.PropTypes.object).isRequired,
    departmentId: PropTypes.string.isRequired
  };
  render() {
    return (
      <Nav className="chooser" bsStyle="pills" stacked key={1} activeKey={1} pullLeft onSelect={this.handleSelect}>
        {this.departmentsList()}
      </Nav>
    );
  }
  departmentsList() {
    return this.props.departments.map((department) => {
      return <LinkContainer to={{ pathname: '/rating', query: {departmentId: department.departmentId} }}
                            key={department.departmentId}>
        <NavItem eventKey={department.departmentId}> {department.departmentName}</NavItem>
      </LinkContainer>
    });
  }
}