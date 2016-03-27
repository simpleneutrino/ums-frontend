'use strict';

import React, {Component, PropTypes} from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import { LinkContainer } from 'react-router-bootstrap';
import find from 'lodash/find'

export default class SpecoffersList extends Component {
  static propTypes = {
    specofferChooserData: PropTypes.arrayOf(React.PropTypes.object).isRequired,
    departmentId: PropTypes.string.isRequired
  };

  render() {
    console.log('this.specoffersList()', this.specoffersList());
    return (
      <Nav bsStyle="pills" key={100} stacked activeKey={1} pullLeft onSelect={this.handleSelect}>
        {this.specoffersList()}
      </Nav>
    );
  }
  specoffersList() {
    let pickedDepartment = find(this.props.specofferChooserData, {departmentId: parseInt(this.props.departmentId)});
    if (!pickedDepartment) {
      return <div>Choose a department at first!</div>
    }
    return pickedDepartment.specoffers.map((specoffer) => {
      return <LinkContainer key={specoffer.specofferId}
        to={{ pathname: '/rating',
              query: {departmentId: pickedDepartment.departmentId, specofferId: specoffer.specofferId} }}>
        <NavItem eventKey={specoffer.specofferId}> {specoffer.name} {specoffer.specofferId}</NavItem>
      </LinkContainer>;
    });
  };
}