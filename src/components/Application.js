import React, {PropTypes} from 'react'
import TopNav from './nav/NavBar'

export default class Application extends React.Component {

  render() {
    return (
      <div id="layout">
        <TopNav />
        <div id="main" className="container">
          {this.props.children}
        </div>

      </div>
    )
  }
}