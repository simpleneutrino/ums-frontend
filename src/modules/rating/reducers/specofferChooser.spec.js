import {expect}  from 'chai';
import * as types from './../constants';
import reducer from './specofferChooser';
import {changeTimePeriodId} from './../../settings/duck';
import {LOCATION_CHANGE} from 'react-router-redux';

describe('specofferChooser reducer', () => {

  let specofferChooserInitialState = {
    isLoading: true,
    resources: [],
    departmentId: 498,
    specofferId: null,
    error: null
  };

  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).to.eql(specofferChooserInitialState)
  });

  it('should handle START action', () => {
    expect(reducer({}, {type: types.LOAD_SPECOFFER_CHOOSER_START}))
      .to.eql({isLoading: true, resources: []})
  });

  it('should handle SUCCESS action', () => {
    expect(
      reducer(undefined, {
        type: types.LOAD_SPECOFFER_CHOOSER_SUCCESS,
        response: [{a: 1}, {b: 2}]
      }
      )
    ).to.eql(Object.assign({}, specofferChooserInitialState, {
      isLoading: false,
      resources: [{a: 1}, {b: 2}]
    }))
  });

  it('should handle TIMEPERIODID_CHANGED action', () => {
    expect(
      reducer({resources: [1, 2, 3]}, changeTimePeriodId(1)).resources
    ).to.have.length(0)
  });

  it('should handle TIMEPERIODID_CHANGED action', () => {
    let action = {
      type: LOCATION_CHANGE,
      payload: {
        query: {
          specofferId: 44
        }
      }
    };
    expect(reducer({departmentId: 1, smthElse: '1'}, action)).to.eql({
      specofferId: 44,
      departmentId: 1,
      smthElse: '1'
    })
  })

});