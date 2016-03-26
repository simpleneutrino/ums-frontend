import React, {Component} from 'react';
import NavBar from './navbar/NavBar';

export default class Application extends Component {
  render() {
    return (
      <div id="layout">
        <NavBar />
        <div id="main" className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}