import React from 'react'

export default class Forbidden extends React.Component {
  render () {
    return (
      <div>
        <div className="header">
        </div>
        <div className="content">
          <p>
            {/* TODO: get some info about the error */}
            Forbidden
          </p>
        </div>
      </div>
    )
  }
}
