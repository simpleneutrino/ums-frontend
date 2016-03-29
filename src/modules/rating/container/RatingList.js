'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadEnrolmnetList } from './../actions';
import { createSelector } from 'reselect';

class SpecofferChooser extends Component {
  static propTypes = {
    specofferId: PropTypes.string
  };

  componentDidMount() {
    this.props.loadSpecoffersChooser(this.props.specofferId);
  }
  componentWillReceiveProps(nextProps) {
    console.log('SpecofferChooser WillReceiveProps', nextProps);
  }
  render() {
    let {ratingList, specofferId} = this.props;
    if (!ratingList.length) {
      return <div>loading...</div>;
    }
    return (
      <div>
        rating list
      </div>
    );
  }
}

const mapStateToSpecofferChooser = createSelector(
  (state) => state.rating.ratingList,
  (state, ownProps) => ownProps.location.query.specofferId,
  (ratingList, specofferId) => ({
    ratingList: ratingList,
    specofferId: specofferId
  })
);


export default connect(
  mapStateToSpecofferChooser,
  { loadEnrolmnetList }
)(SpecofferChooser);