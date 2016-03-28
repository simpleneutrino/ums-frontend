'use strict';

import React, {Component, PropTypes} from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import { LinkContainer } from 'react-router-bootstrap';

export default class SpecoffersList extends Component {
  static propTypes = {
    specoffers: PropTypes.arrayOf(React.PropTypes.object).isRequired,
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
    let {specoffers, departmentId} = this.props;
    if (!specoffers) {
      return <div>Choose a department at first!</div>
    }
    return specoffers.specoffers.map((specoffer) => {
      return <LinkContainer key={specoffer.specofferId}
        to={{ pathname: '/rating',
              query: {departmentId: departmentId, specofferId: specoffer.specofferId} }}>
        <NavItem eventKey={specoffer.specofferId}> {specoffer.name} {specoffer.specofferId}</NavItem>
      </LinkContainer>;
    });
  };
}