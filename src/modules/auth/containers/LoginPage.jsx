import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Login from '../components/Login';
import {authorize}  from './../actions';
import {getError}  from './../helpers';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  changeField = name => (event) => {
    this.setState({[name]: event.target.value});
  };

  submit = (event) => {
    event.preventDefault();
    let {state, props: {location}} = this;
    this.props.authorize({...state}, location.query.next);
  };

  render() {
    return (
      <Login submit={this.submit}
             error={getError(this.props)}
             form={this.state}
             onLoginChange={this.changeField('login')}
             onPasswordChange={this.changeField('password')}/>
    );
  }
}

LoginPage.propTypes = {
  auth: PropTypes.object.isRequired,
  authorize: PropTypes.func.isRequired
};

export default connect((state) => {
  return { auth: state.auth}
}, {
  authorize
})(LoginPage);