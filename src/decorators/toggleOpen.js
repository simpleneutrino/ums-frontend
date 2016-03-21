import React, { Component, PropTypes } from 'react'

export default (ComposedComponent) => {
  return class toggleOpen extends Component {

    constructor(...args) {
      super(...args);
      this.state = {
        isOpen: true
      }
    }
    render() {
      return <ComposedComponent
        handleToggle={this.handleToggle}
        handleClose={this.handleClose}
        {...this.props} {...this.state}/>
    }

    handleClose = () => this.setState({isOpen: false});

    handleToggle = (ev) => {
      if (ev) ev.preventDefault();
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }
}