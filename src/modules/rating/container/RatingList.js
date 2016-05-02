'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadRatingList } from './../actions';
import { createSelector } from 'reselect';
import RatingTable from './../components/RatingTable';
import Loader from 'loader'

class RatingListContainer extends Component {
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
    let {isLoading, enrolments} = ratingList;

    if (!specofferId) {
      return <div>Для того щоб отримати перелік заяв потрібно обрати пропозицію!</div>;
    }
    if (!isLoading && !enrolments.length) {
      return <div>Данних по данній пропозиції немає!</div>;
    }

    return (
        <Loader isLoading={isLoading}>
          <RatingTable {...ratingList} />
        </Loader>
    );
  }
}

/**
 * ratingList: list of enrolments sorted by rating
 * specoffer id - query param
 */
const mapStateToRatingList = createSelector(
  (state) => state.rating.ratingList,
  (state, ownProps) => ownProps.location.query.specofferId,
  (ratingList, specofferId) => ({
    ratingList: ratingList,
    specofferId: specofferId
  })
);

const mapDispatchToRatingList = (dispatch) => {
  return {
    loadRatingList: (specofferId) => dispatch(loadRatingList(specofferId))
  };
};

export default connect(
  mapStateToRatingList,
  mapDispatchToRatingList
)(RatingListContainer);