/**
 * Created by nikolaykozhukharenko on 4/6/16.
 */
import { expect }  from 'chai';
import * as types from './../constants';
import reducer from './ratingList';
import { TIMEPERIODID_CHANGED, changeTimePeriodId } from './../../settings/duck';
import { highlighEnrolment } from './../actions'

describe('ratingList reducer', () => {

  let initialRatingListState = {
    isLoading: false,
    enrolments: [],
    error: null,
    highlightedEnrolment: null
  };

  it('should return the initial state', () => {
    expect(
        reducer(undefined, {})
    ).to.eql(initialRatingListState)
  });

  it('should handle LOAD_RATING_LIST_START action', () => {
    expect(
        reducer(undefined, {type: types.LOAD_RATING_LIST_START}).isLoading
    ).to.equal(true)
  });

  it('should handle LOAD_RATING_LIST_SUCCESS action', () => {
    expect(
        reducer(undefined, {
          type: types.LOAD_RATING_LIST_SUCCESS,
          response: {
            enrolments: [1,2,3],
            error: {}
          }
        }
        )
    ).to.eql(Object.assign({}, initialRatingListState, {
      isLoading: false,
      enrolments: [1,2,3],
      error: null
    }))
  });

  it('should handle TIMEPERIODID_CHANGED action', () => {
    expect(
        reducer({enrolments: [1,2,3]}, changeTimePeriodId(1)).enrolments
    ).to.have.length(0)
  });

  it('should handle HIGHLIGH_ENROLMENT action', () => {
    expect(
        reducer({
          highlightedEnrolment: 33
        }, highlighEnrolment(22)).highlightedEnrolment
    ).to.equal(22)
  })
  
})