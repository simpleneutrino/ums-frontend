'use strict';

import React, {Component, PropTypes} from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import { LinkContainer } from 'react-router-bootstrap';

export default class SpecoffersList extends Component {
  static propTypes = {
    specoffers: PropTypes.array.isRequired,
    departmentId: PropTypes.string.isRequired
  };

  render() {
    return (
      <Nav className="chooser" bsStyle="pills" key={100} stacked activeKey={1} pullLeft onSelect={this.handleSelect}>
        {this.specoffersList()}
      </Nav>
    );
  }
  specoffersList() {
    let {specoffers, departmentId} = this.props;
    return specoffers.map((specoffer) => {
      return <LinkContainer key={specoffer.specofferId}
        to={{ pathname: '/rating',
              query: {departmentId: departmentId, specofferId: specoffer.specofferId} }}>
        <NavItem eventKey={specoffer.specofferId}>{specoffer.name}</NavItem>
      </LinkContainer>;
    });
  };
}