import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/lib/Navbar';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import { Link } from 'react-router'
import {getMainInfo} from './reducer';

class NavBar extends Component {
  render() {
    let {enrolMainInfo} = this.props;
    return (
      <Navbar fluid className="nav-header">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={{ pathname: '/enrolments'}}>
              <Glyphicon glyph="chevron-left" /> {enrolMainInfo.crtUser} | {enrolMainInfo.evDate}
            </Link>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default connect((state, ownProps) => ({
  enrolMainInfo: getMainInfo(state, ownProps) || {}
}))(NavBar)