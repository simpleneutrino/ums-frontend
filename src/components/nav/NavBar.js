'use strict';

import React, {Component} from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Modal from 'react-bootstrap/lib/Modal';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';

import SettingsModal from './../settings/SettingsModal'

export default class TopNav extends Component {

  _onSettingModalClick = () => {
    this.refs.SetModal.openModal()
  };

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">UMS</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <LinkContainer to={{ pathname: '/statistics'}}>
              <NavItem>Статистика</NavItem>
            </LinkContainer>

            <LinkContainer to={{ pathname: '/enrolment/list'}}>
              <NavItem>Заяви</NavItem>
            </LinkContainer>

            <LinkContainer to={{ pathname: '/persons'}}>
              <NavItem>Персони</NavItem>
            </LinkContainer>

            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1} onClick={this._onSettingModalClick}>Налаштування</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider/>
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
        <SettingsModal ref='SetModal'/>
      </div>
    )
  }
}