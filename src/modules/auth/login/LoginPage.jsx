import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Login from './Login';
import {auth, changeField}  from './../actions';

class LoginPage extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
  }

  changeField(name, event) {
    this.props.dispatch(changeField(name, event.target.value));
  }

  submit(event) {
    event.preventDefault();
    this.props.dispatch(auth({...this.props.auth.form}));
  }

  render() {
    return (
      <Login submit={this.submit}
             auth={this.props.auth}
             onLoginChange={this.changeField.bind(this,'login')}
             onPasswordChange={this.changeField.bind(this,'password')}/>
    );
  }
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};


function select(state) {
  return {
    auth: state.auth
  };
}

export default connect(select)(LoginPage);