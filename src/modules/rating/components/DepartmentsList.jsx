'use strict';

import React, {Component, PropTypes} from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import { LinkContainer } from 'react-router-bootstrap';

export default class DepartmentsList extends Component {
  static propTypes = {
    specofferChooserData: PropTypes.arrayOf(React.PropTypes.object).isRequired
  };
  render() {
    return (
      <Nav bsStyle="pills" stacked key={1} activeKey={1} pullLeft onSelect={this.handleSelect}>
        {this.departmentsList()}
      </Nav>
    );
  }
  departmentsList() {
    return this.props.specofferChooserData.map((department) => {
      return <LinkContainer to={{ pathname: '/rating', query: {departmentId: department.departmentId} }}
                            key={department.departmentId}>
        <NavItem eventKey={department.departmentId}> {department.departmentName}</NavItem>
      </LinkContainer>
    });
  }
}