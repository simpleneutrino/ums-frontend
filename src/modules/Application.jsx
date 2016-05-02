import React, {Component} from 'react';
import NavBar from './navbar/NavBar';

export default class Application extends Component {
  render() {
    const { main, header } = this.props;
    let navBar = header ? header : <NavBar/>;
    let mainContent = main ? main : this.props.children;

    return (
      <div id="layout">
        {navBar}
        <div id="main" className="container-fluid main-container">
          {mainContent}
        </div>
      </div>
    );
  }
}