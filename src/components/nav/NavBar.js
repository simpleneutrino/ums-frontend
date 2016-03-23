'use strict';

import React, {Component} from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Modal from 'react-bootstrap/lib/Modal';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';

import Settings from './../settings/settings'

export default class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {isModalOpen: false};
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  }

  closeModal = () => {
    this.setState({ isModalOpen: false });
  }

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
              <MenuItem eventKey={3.1} onClick={this.openModal}>Налаштування</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider/>
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
        <Modal show={this.state.isModalOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Налаштування</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Settings/>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}