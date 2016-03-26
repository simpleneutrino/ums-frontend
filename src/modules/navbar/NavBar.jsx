import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';
import SettingsModal from './../settings/components/SettingsModal';
import checkAuth from '../auth/helpers';

export default class NavBar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">UMS</a>
          </Navbar.Brand>
        </Navbar.Header>

        <Nav>
          <LinkContainer to={{ pathname: '/enrolments'}}>
            <NavItem>Заяви</NavItem>
          </LinkContainer>

          <LinkContainer to={{ pathname: '/statistics'}}>
            <NavItem>Статистика</NavItem>
          </LinkContainer>

          <LinkContainer to={{ pathname: '/rating'}}>
            <NavItem>Рейтинг</NavItem>
          </LinkContainer>

          <NavDropdown eventKey={3} title="Optins" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1} onClick={this._onSettingModalClick}>Налаштування</MenuItem>
          </NavDropdown>

          {this.authItem('persons', 'Персони')}
        </Nav>

        <Nav className='pull-right'>
          {this.loginItem()}
        </Nav>

        <SettingsModal ref='SetModal'/>
      </Navbar>
    );
  }

  _onSettingModalClick = () => {
    this.refs.SetModal.openModal();
  };

  authItem(path, name) {
    let result = null;

    if (checkAuth(this.props.auth, path)) {
      result = (
        <LinkContainer to={{ pathname: path}}>
          <NavItem>{name}</NavItem>
        </LinkContainer>
      );
    }

    return result;
  }

  loginItem() {
    if (this.props.auth.user.authenticated) {
      return (
        <LinkContainer to={{pathname: '/logout'}}>
          <NavItem >Logout</NavItem>
        </LinkContainer>
      );
    } else {
      return (
        <LinkContainer to={{pathname: '/login'}}>
          <NavItem >Login</NavItem>
        </LinkContainer>
      );
    }
  }
}

NavBar.propTypes = {
  auth: PropTypes.object.isRequired
};

function select(state) {
  return {
    auth: state.auth
  };
}

export default connect(select)(NavBar);