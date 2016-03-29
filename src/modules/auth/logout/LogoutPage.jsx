import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {AUTH_LOG_OUT} from './../constants';
import {push} from 'react-router-redux';

class LogoutPage extends Component {

  componentDidMount() {
    this.props.dispatch({type: AUTH_LOG_OUT});
    this.props.dispatch(push('/'));
  }

  render() {
    return (
      <div>виходимо</div>
    );
  }
}

LogoutPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(LogoutPage);