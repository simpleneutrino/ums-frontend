import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Forbidden from './Forbidden';
import checkAuth from './../helpers';

class AuthContainer extends Component {
  render() {
    const {AuthComponent, path} = this.props.route;

    if (checkAuth(this.props.auth, path)) {
      return (<AuthComponent {...this.props}/>);
    } else {
      return (<Forbidden/>);
    }
  }
}

function select(state) {
  return {
    auth: state.auth
  };
}

export default connect(select)(AuthContainer);