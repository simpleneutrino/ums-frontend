'use strict';

import chai  from 'chai';
import configureStore from 'redux-mock-store';
import {loadSpecoffersChooser, loadRatingList, highlighEnrolment} from './actions'
import {REQUEST_API} from '../../system/constants';
import * as types from './constants';

let expect = chai.expect;

describe('Rating actions', () => {
  const mockStore = configureStore();

  describe('loadSpecoffersChooser AC', () => {
    let initialData = {
      rating: {
        specofferChooser: {
          resources: [1, 2, 3]
        }
      }
    };
    const interrupt = loadSpecoffersChooser().interrupt;

    it('interrupt loadSpecoffersChooser ' +
        'when data fro specoffeShoose is available (full array)', () => {
      let store = mockStore(initialData);
      expect(interrupt(store)).to.equal(true)
    });

    it('not interrupt loadSpecoffersChooser ' +
        'when data for specoffer choose is not available (empty)', () => {
      initialData.rating.specofferChooser.resources = [];
      let store = mockStore(initialData);
      expect(interrupt(store)).to.equal(false)
    });

  });

  describe('loadRatingList, highlighEnrolment ACs', () => {

    it('should create an action to load rating list ', () => {
      const specofferId = 1;

      const expectedAction = {
        type: REQUEST_API,
        request: {
          url: `/enrolments/1/ratings`,
          actions: {
            start: {type: types.LOAD_RATING_LIST_START},
            success: {type: types.LOAD_RATING_LIST_SUCCESS},
            fail: {type: types.LOAD_RATING_LIST_FAIL}
          }
        }
      };

      expect(loadRatingList(specofferId)).to.eql(expectedAction)
    });

    it('should create an action to highligh an enrolment ', () => {
      const enrolmentId = 1;

      const expectedAction = {
        type: types.HIGHLIGH_ENROLMENT,
        payload: {
          enrolmentId
        }
      };

      expect(highlighEnrolment(enrolmentId)).to.eql(expectedAction)
    })

  })
});