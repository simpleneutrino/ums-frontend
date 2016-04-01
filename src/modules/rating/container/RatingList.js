'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadRatingList } from './../actions';
import { createSelector } from 'reselect';

class SpecofferChooser extends Component {
  static propTypes = {
    specofferId: PropTypes.string
  };

  componentDidMount() {
    if (this.props.specofferId) {
      this.props.loadRatingList(this.props.specofferId);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.specofferId && nextProps.specofferId !== this.props.specofferId) {
      this.props.loadRatingList(nextProps.specofferId)
    }
  }
  render() {
    let {ratingList, specofferId} = this.props;
    //console.log('ratingList', ratingList);
    //console.log('ratingList resources', ratingList.resources);
    if (!ratingList.length) {
      return <div>loading...</div>;
    }
    return (
      <div>
        {ratingList.resources}
      </div>
    );
  }
}

/**
 * ratingList: list of enrolments sorted by rating
 * specoffer id - query param
 */
const mapStateToSpecofferChooser = createSelector(
  (state) => state.rating.ratingList,
  (state, ownProps) => ownProps.location.query.specofferId,
  (ratingList, specofferId) => ({
    ratingList: ratingList,
    specofferId: specofferId
  })
);

const mapDispatchToChartFactory = (dispatch) => {
  return {
    loadRatingList: (specofferId) => dispatch(loadRatingList(specofferId))
  };
};

export default connect(
  mapStateToSpecofferChooser,
  mapDispatchToChartFactory
)(SpecofferChooser);