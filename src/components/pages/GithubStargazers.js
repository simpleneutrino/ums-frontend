import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Explore from '../github/Explore'
import * as githubActions from '../../actions/github'

class GithubStargazers extends React.Component {

  static propTypes = {
    children: PropTypes.any,
    actions: PropTypes.object
  };

  render () {
    return (
      <div>
        <div className="header">
          <h1>Stargazers</h1>
        </div>

        <Explore {...this.props} />

        {/* this will render the child routes */}
        {this.props.children &&
          React.cloneElement(this.props.children, { ...this.props })}
      </div>
    )
  }
}

export default connect(
  ({ github }) => ({ github }),
  dispatch => ({ actions: bindActionCreators(githubActions, dispatch) })
)(GithubStargazers)
