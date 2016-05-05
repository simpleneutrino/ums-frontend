import React, {Component, PropTypes} from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import { Link } from 'react-router'

export default class Header extends Component {
  render() {
    return (
      <Navbar fluid className="nav-header">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={{ pathname: '/specoffers/list'}}>
              <Glyphicon glyph="chevron-left" /> Пропозиція № {this.props.params.id}
            </Link>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}
