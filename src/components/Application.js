import React, {PropTypes} from 'react'
import TopNav from './nav/NavBar'
import DisplayError from './devTools/DisplayError'

export default class Application extends React.Component {

  render() {
    return (
      <div id="layout">
        <TopNav />
        <div id="main" className="container">
          <DisplayError />
          {this.props.children}
        </div>

      </div>
    )
  }
}