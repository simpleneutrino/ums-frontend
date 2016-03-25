'use strict';

import React, {Component, PropTypes} from 'react'
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import { LinkContainer } from 'react-router-bootstrap';

class EnrolmentView extends Component {
  static propTypes = {
    children: PropTypes.any,
    id: PropTypes.string.isRequired
  };

  handleSelect = (selectedKey) => {
    console.log('selected ' + selectedKey);
  };

  render() {
    return (
      <div>
        <div>Enrolment</div>
        <Nav bsStyle="pills" stacked activeKey={1} onSelect={this.handleSelect}>
          <LinkContainer to={{ pathname: `/enrolment/${this.props.id}/mainInfo`}}>
            <NavItem eventKey={1} > Main Info </NavItem>
          </LinkContainer>
          <LinkContainer to={{ pathname: `/enrolment/${this.props.id}/benefits`}}>
            <NavItem eventKey={2} > Benefits </NavItem>
          </LinkContainer>
        </Nav>
        {this.props.children}
      </div>
    )
  }
}

export default EnrolmentView
