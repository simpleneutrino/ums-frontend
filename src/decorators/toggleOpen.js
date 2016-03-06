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
      console.log('this.state before', this.state);
      this.setState({
        isOpen: !this.state.isOpen
      })
      console.log('this.state after', this.state);
    }
  }
}